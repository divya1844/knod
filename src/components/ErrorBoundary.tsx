import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  declare props: ErrorBoundaryProps;
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Unhandled error in app:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f7] text-brand-black px-6 text-center">
          <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
          <p className="text-brand-black/60 mb-6">
            Please refresh the page. If the problem persists, contact hello@knod.ai.
          </p>
          <a
            href="/"
            className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors"
          >
            Back to home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
