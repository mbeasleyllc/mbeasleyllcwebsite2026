
import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import VideoConference from "@/components/video/VideoConference";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Users, Shield, Clock } from "lucide-react";

export default function VideoConferencePage() {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const startMeeting = () => {
    if (displayName.trim()) {
      setIsInMeeting(true);
    }
  };

  const endMeeting = () => {
    setIsInMeeting(false);
  };

  if (isInMeeting) {
    return (
      <>
        <Head>
          <title>Video Conference | Mike Beasley & Associates</title>
          <meta name="description" content="Secure video conferencing for consultations and meetings" />
        </Head>
        <div className="relative w-full h-screen">
          <Button
            onClick={endMeeting}
            className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700"
          >
            End Meeting
          </Button>
          <VideoConference
            roomName={roomName || "vpaas-magic-cookie-ba26581eb6884f1a90e42caa388e90c9/MikeBeasleyConsulting"}
            displayName={displayName}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Video Conference | Mike Beasley & Associates</title>
        <meta name="description" content="Join our secure video conference for consultations and meetings" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <Video className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Video Conference
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our secure video conference for consultations, strategy sessions, and collaborative meetings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Secure & Private
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    End-to-end encrypted video calls ensure your business discussions remain confidential and secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Multi-Participant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Support for multiple participants, screen sharing, and collaborative features for effective meetings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Flexible Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join scheduled meetings or start instant conferences as needed for your business requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    HD Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High-definition video and crystal-clear audio for professional communication experiences.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Join Conference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="displayName"
                    type="text"
                    placeholder="Enter your name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Room (Optional)
                  </label>
                  <Input
                    id="roomName"
                    type="text"
                    placeholder="Custom room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave blank to join the default consultation room
                  </p>
                </div>

                <Button 
                  onClick={startMeeting}
                  disabled={!displayName.trim()}
                  className="w-full"
                >
                  Join Meeting
                </Button>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Having trouble? Contact us at{" "}
                <a href="mailto:support@mikebeasley.com" className="text-blue-600 hover:underline">
                  support@mikebeasley.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
