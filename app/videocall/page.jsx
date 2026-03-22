"use client";

import React, { useState, useRef } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // Correct import for App Router

const VideoCallPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter(); // Initialize the App Router hook

  // State Management
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  const apiRef = useRef(null);
  const MAX_PARTICIPANTS = 100;

  // --- Redirect Logic ---
  const handleExit = () => {
    if (apiRef.current) {
      apiRef.current.dispose(); // Properly shut down the Jitsi instance
    }
    router.push("/"); // Redirect to Home Page
  };

  if (!isLoaded) return <div className="flex justify-center mt-20">Loading Clerk...</div>;
  if (!isSignedIn) return <div className="flex justify-center mt-20 text-black">Please sign in to access meetings.</div>;

  // --- 1. PRE-CALL SETUP UI ---
  if (!hasJoined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-black">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <h1 className="text-2xl font-bold mb-2 text-center text-blue-600">Video Connect</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">Create a room as host or join an existing one.</p>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Room Name</label>
              <input
                type="text"
                placeholder="e.g. weekly-sync"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value.replace(/\s+/g, '-'))}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Room Password</label>
              <input
                type="password"
                placeholder="Required for Host"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => { setIsHost(true); setHasJoined(true); }}
                disabled={!roomName || !password}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Start as Host
              </button>
              <button
                onClick={() => { setIsHost(false); setHasJoined(true); }}
                disabled={!roomName}
                className="w-full bg-gray-100 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Join as Participant
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. ACTIVE JITSI CALL UI ---
  return (
    <div style={{ height: "100vh", display: "grid", backgroundColor: "#000" }}>
      {/* Manual Leave Button */}
      <button 
        onClick={handleExit}
        className="absolute top-5 left-5 z-[100] bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-2xl hover:bg-red-700 transition-all active:scale-95"
      >
        ✕ Leave Meeting
      </button>

      <JitsiMeeting
        domain="meet.jit.si"
        roomName={roomName}
        
        // This is the key! It triggers when the user clicks the "Hangup" button in Jitsi
        onReadyToClose={handleExit}
        
        configOverwrite={{
          startWithAudioMuted: true,
          startWithVideoMuted: true,
          enableWelcomePage: false,
          prejoinPageEnabled: false, // Skips Jitsi's internal lobby if you want
          enableLobby: isHost, 
          securityUi: {
            hideLobbyButton: !isHost,
          },
        }}
        interfaceConfigOverwrite={{
          TOOLBAR_BUTTONS: [
            "microphone", "camera", "desktop", "fullscreen",
            "fodeviceselection", "hangup", "chat", "settings",
            "raisehand", "videoquality", "tileview", "security"
          ],
        }}
        userInfo={{
          displayName: user.fullName || user.username || "User",
          email: user.primaryEmailAddress?.emailAddress,
        }}
        onApiReady={(api) => {
          apiRef.current = api;

          // If they leave via the Jitsi red button
          api.addEventListener("videoConferenceLeft", handleExit);

          api.addEventListener("videoConferenceJoined", () => {
            if (isHost && password) {
              console.log("Setting host password...");
              api.executeCommand("password", password);
            }
          });

          // Participant limit management
          api.addEventListener("participantJoined", (participant) => {
            const participants = api.getParticipantsInfo();
            if (participants.length > MAX_PARTICIPANTS) {
              api.executeCommand("kickParticipant", participant.id);
            }
          });
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
          iframeRef.style.width = "100%";
        }}
      />
    </div>
  );
};

export default VideoCallPage;