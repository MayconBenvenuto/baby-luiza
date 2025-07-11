import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Heart, Gift, Camera, MapPin, Clock, Users, Music } from "lucide-react";
import { eventConfig } from "../config/eventConfig";
import CountdownTimer from "./CountdownTimer";
import PhotoGallery from "./PhotoGallery";
import GiftSuggestions from "./GiftSuggestions";
import MusicPlayer from "./MusicPlayer";

const InvitationPage = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    guestCount: 1,
    attending: false,
    observations: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setRsvpData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!rsvpData.name || !rsvpData.attending) {
      alert("Por favor, preencha seu nome e confirme se vai comparecer!");
      return;
    }

    // Confirmar presença e redirecionar para WhatsApp
    setIsSubmitted(true);
    
    // Redirecionar para WhatsApp com mensagem personalizada
    const message = encodeURIComponent(`Olá! Sou ${rsvpData.name} e minha presença está confirmada na festa da Luiza! 🎉 Vou levar ${rsvpData.guestCount} pessoa(s). ${rsvpData.observations ? `Observações: ${rsvpData.observations}` : ''}`);
    const whatsappUrl = `https://wa.me/${eventConfig.contact.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <MusicPlayer />
      
      {/* Hero Section */}
      <section className="relative px-4 py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 animate-pulse"></div>
        <div className="relative z-10">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl">🎂</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {eventConfig.title}
          </h1>
          
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Venha celebrar conosco este momento especial! 🎉
          </p>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
            <span className="text-lg font-semibold text-pink-600">
              {eventConfig.formattedDate}
            </span>
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="px-4 py-8">
        <CountdownTimer targetDate={eventConfig.date} />
      </section>

      {/* Event Details */}
      <section className="px-4 py-8">
        <Card className="mx-auto max-w-md shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <MapPin className="w-8 h-8 mx-auto text-pink-600 mb-2" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Local & Horário</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Local:</h3>
                  <p className="text-gray-600">{eventConfig.venue.name}</p>
                  <p className="text-gray-600">{eventConfig.venue.address}</p>
                  <p className="text-gray-600">{eventConfig.venue.city}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Horário:</h3>
                  <p className="text-gray-600">{eventConfig.time}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gift Suggestions */}
      <section className="px-4 py-8">
        <GiftSuggestions />
      </section>

      {/* Photo Gallery */}
      <section className="px-4 py-8">
        <PhotoGallery />
      </section>

      {/* RSVP Section */}
      <section className="px-4 py-8">
        <Card className="mx-auto max-w-md shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Users className="w-8 h-8 mx-auto text-pink-600 mb-2" />
              <h2 className="text-2xl font-bold text-gray-800">Confirme sua Presença</h2>
              <p className="text-gray-600 mt-2">Sua presença é muito importante para nós!</p>
            </div>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nome do convidado *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={rsvpData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700">
                    Quantidade de convidados
                  </Label>
                  <Input
                    id="guestCount"
                    type="number"
                    min="1"
                    max="10"
                    value={rsvpData.guestCount}
                    onChange={(e) => handleInputChange("guestCount", parseInt(e.target.value))}
                    className="mt-1"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="attending"
                    checked={rsvpData.attending}
                    onCheckedChange={(checked) => handleInputChange("attending", checked)}
                  />
                  <Label htmlFor="attending" className="text-sm font-medium text-gray-700">
                    Sim, eu vou comparecer! 🎉
                  </Label>
                </div>

                <div>
                  <Label htmlFor="observations" className="text-sm font-medium text-gray-700">
                    Observações
                  </Label>
                  <Textarea
                    id="observations"
                    placeholder="Alguma observação especial? (opcional)"
                    value={rsvpData.observations}
                    onChange={(e) => handleInputChange("observations", e.target.value)}
                    className="mt-1 min-h-[80px]"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Confirmar Presença via WhatsApp 💕
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Presença Confirmada!</h3>
                <p className="text-gray-600">
                  Obrigado por confirmar! Você será redirecionado para o WhatsApp.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <span className="text-2xl">🎈</span>
          <span className="text-2xl">🎂</span>
          <span className="text-2xl">🎉</span>
        </div>
        <p className="text-gray-600">
          Com amor, família da Luiza 💕
        </p>
      </footer>
    </div>
  );
};

export default InvitationPage;