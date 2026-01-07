import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
  Column,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export function GetInTouchTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Text style={headerText}>New Message Received</Text>
          </Section>

          {/* Main Content */}
          <Section style={contentSection}>
            <Text style={greeting}>Hi there! 👋</Text>
            <Text style={introText}>
              You've received a new message from your portfolio contact form.
            </Text>

            {/* Sender Info Card */}
            <Section style={infoCard}>
              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>From:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>
                    {firstName} {lastName}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Email:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Link href={`mailto:${email}`} style={emailLink}>
                    {email}
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Message */}
            <Section style={messageSection}>
              <Text style={messageLabel}>Message:</Text>
              <Section style={messageBorder}>
                <Text style={messageContent}>{message}</Text>
              </Section>
            </Section>

            {/* CTA */}
            <Section style={ctaSection}>
              <Link href={`mailto:${email}`} style={button}>
                Reply to {firstName}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footerSection}>
            <Text style={footerText}>
              This email was sent from your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Cantarell,"Fira Sans","Droid Sans","Source Sans Pro",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};

const headerSection = {
  backgroundColor: "#1f2937",
  padding: "32px 20px",
  textAlign: "center" as const,
  borderRadius: "8px 8px 0 0",
};

const headerText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const contentSection = {
  padding: "32px 20px",
};

const greeting = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1f2937",
  marginBottom: "8px",
};

const introText = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "24px",
  lineHeight: "1.5",
};

const infoCard = {
  backgroundColor: "#f3f4f6",
  padding: "20px",
  borderRadius: "6px",
  marginBottom: "24px",
};

const labelColumn = {
  width: "100px",
  paddingRight: "16px",
};

const valueColumn = {
  flex: 1,
};

const label = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#4b5563",
  margin: "0",
  marginBottom: "12px",
  textTransform: "uppercase" as const,
};

const value = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0",
  marginBottom: "12px",
};

const emailLink = {
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
};

const messageSection = {
  marginBottom: "24px",
};

const messageLabel = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#4b5563",
  margin: "0 0 12px 0",
  textTransform: "uppercase" as const,
};

const messageBorder = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderLeft: "4px solid #3b82f6",
  borderRadius: "4px",
};

const messageContent = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const ctaSection = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const button = {
  backgroundColor: "#3b82f6",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block" as const,
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footerSection = {
  padding: "0 20px 20px 20px",
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};
