import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function VerifyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container max-w-7xl px-4 flex flex-col items-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Verify your email</CardTitle>
            <CardDescription>
              We&apos;ve sent you a verification link to your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-primary/10 p-6">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Please check your email and click the verification link to complete your registration.
              </p>
              <p className="text-sm text-muted-foreground">
                If you haven&apos;t received the email, please check your spam folder.
              </p>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Resend verification email
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
