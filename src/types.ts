// Type definitions for Travel Planner App

export interface TravelPlanResponse {
    answer: string;
  }
  
  export interface TravelPlanRequest {
    question: string;
  }
  
  export interface ErrorResponse {
    detail?: string;
    message?: string;
  }