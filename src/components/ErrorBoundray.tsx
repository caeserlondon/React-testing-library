import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';
interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = { hasError: false };

	public static getDerivedStateFromError(error: Error): State {
		// Update state so the next render shows the fallback UI
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Log error to an error reporting service (e.g., Sentry) in production
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			if (this.props.fallback) {
				return this.props.fallback;
			}
			return (
				<div
					className='error-boundary'
					style={{ padding: '20px', color: 'red' }}
				>
					<h2>Something went wrong.</h2>
					<button onClick={() => window.location.reload()}>Reload Page</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
