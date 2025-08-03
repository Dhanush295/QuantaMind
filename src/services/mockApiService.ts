// Mock API service for development without backend
import { MOCK_AUTH_RESPONSE, MOCK_USER, simulateApiDelay } from '@/utils/mockData';
import { AuthResponse, RegisterData, LoginData } from './apiService';

export class MockAuthApiService {
  async login(credentials: LoginData): Promise<AuthResponse> {
    await simulateApiDelay(800);
    
    // Simulate validation
    if (!credentials.email || !credentials.password) {
      throw new Error('Email and password are required');
    }
    
    if (credentials.password.length < 6) {
      throw new Error('Invalid credentials');
    }
    
    return MOCK_AUTH_RESPONSE;
  }

  async register(userData: RegisterData): Promise<string> {
    await simulateApiDelay(1000);
    
    // Simulate validation
    if (!userData.email || !userData.password || !userData.first_name || !userData.last_name) {
      throw new Error('All fields are required');
    }
    
    if (userData.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    
    return 'Registration successful';
  }

  async verifyToken(): Promise<{ data: AuthResponse['data'] }> {
    await simulateApiDelay(300);
    return { data: MOCK_USER };
  }

  async refreshToken(): Promise<{ token: string }> {
    await simulateApiDelay(300);
    return { token: 'mock-refreshed-token' };
  }
}

export const mockAuthApi = new MockAuthApiService();