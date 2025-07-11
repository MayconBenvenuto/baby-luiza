import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Gift } from "lucide-react";
import { giftSuggestions } from "../data/contentData";

const GiftSuggestions = () => {
  return (
    <Card className="mx-auto max-w-md shadow-xl bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <Gift className="w-8 h-8 mx-auto text-pink-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Dicas de Presentes</h2>
          <p className="text-gray-600 mt-2">
            Algumas sugestões para deixar a Luiza ainda mais feliz! 🎁
          </p>
        </div>

        <div className="space-y-4">
          {giftSuggestions.map((category, index) => (
            <div key={index} className="border-l-4 border-pink-400 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <Badge
                    key={itemIndex}
                    variant="secondary"
                    className="bg-pink-100 text-pink-800 hover:bg-pink-200 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-600">💡</span>
            <h4 className="font-semibold text-yellow-800">Dica Especial:</h4>
          </div>
          <p className="text-sm text-yellow-700">
            Lembre-se: o mais importante é sua presença! Mas se quiser presentear, 
            escolha algo que estimule o desenvolvimento da Luiza. 💕
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftSuggestions;