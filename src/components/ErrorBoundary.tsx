import { Component, type ErrorInfo, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Unhandled application error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="flex min-h-screen flex-col items-center justify-center gap-4 py-20 text-center">
          <h1 className="text-3xl">Something went wrong</h1>
          <p className="max-w-md text-neutral-600">
            We're sorry — an unexpected error occurred. Please try reloading the page.
          </p>
          <Button onClick={() => window.location.reload()}>Reload page</Button>
        </Container>
      );
    }

    return this.props.children;
  }
}
