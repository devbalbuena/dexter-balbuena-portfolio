export interface Certificate {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  badgeImage?: string;
  isVerified?: boolean;
}
