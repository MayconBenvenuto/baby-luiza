import React from "react";
import { Card, CardContent } from "./ui/card";
import { Camera } from "lucide-react";
import { mockData } from "../data/mock";

const PhotoGallery = () => {
  return (
    <Card className="mx-auto max-w-md shadow-xl bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <Camera className="w-8 h-8 mx-auto text-pink-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Álbum de Fotos</h2>
          <p className="text-gray-600 mt-2">
            Alguns momentos especiais da nossa princesa! 📸
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {mockData.photos.map((photo, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-white">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Cada foto é uma lembrança especial do primeiro ano da Luiza! 🥰
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoGallery;