import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utilitários para formatação
export const formatters = {
  // Formatar data para exibição
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    });
  },

  // Formatar horário
  formatTime: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Criar URL do WhatsApp
  createWhatsAppUrl: (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },

  // Validar formulário RSVP
  validateRSVP: (data) => {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    if (!data.attending) {
      errors.push('Por favor, confirme se você vai comparecer');
    }
    
    if (data.guestCount < 1 || data.guestCount > 10) {
      errors.push('Número de convidados deve ser entre 1 e 10');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
};

// Constantes do projeto
export const constants = {
  MAX_GUESTS: 10,
  MIN_NAME_LENGTH: 2,
  IMAGE_LOADING_TIMEOUT: 5000,
  ANIMATION_DURATION: 300
};
