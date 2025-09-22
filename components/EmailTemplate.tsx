import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Link } from '@react-email/components';

interface EmailTemplateProps {
  email: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ email }) => {
  return (
    <Html>
      <Head />
      <Preview>demande de confirmation</Preview>
      <Body className="bg-gray-100 text-gray-900">
        <Container className="bg-white rounded-lg shadow p-6">
          <Heading className="text-xl font-bold mb-4">demande de confirmation</Heading>
          <Text className="mb-4">Bonjour, Madame, Monsieur</Text>
          <Text className="mb-4">Adresse email : {email}</Text>
          <Text className="mt-6 text-gray-600">Merci de votre confiance !!!</Text>
        
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;