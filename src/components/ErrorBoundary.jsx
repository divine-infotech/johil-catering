import React from 'react';

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      this.setState({
         error: error,
         errorInfo: errorInfo
      });
      // Log error to console
      console.error("Error details:", {
         error: error,
         errorInfo: errorInfo
      });
   }

   render() {
      if (this.state.hasError) {
         // Show error details in development mode
         if (process.env.NODE_ENV === 'development') {
            return (
               <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                  <div className="max-w-2xl w-full">
                     <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
                        
                        <div className="mb-4">
                           <h3 className="font-bold text-gray-800 mb-2">Error Message:</h3>
                           <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm">
                              {this.state.error && (this.state.error.toString())}
                           </pre>
                        </div>

                        <div className="mb-4">
                           <h3 className="font-bold text-gray-800 mb-2">Component Stack:</h3>
                           <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm">
                              {this.state.errorInfo && this.state.errorInfo.componentStack}
                           </pre>
                        </div>

                        <div className="flex gap-4">
                           <button
                              onClick={() => window.location.reload()}
                              className="px-4 py-2 bg-yellow text-white rounded-lg hover:bg-yellow-600 transition-all"
                           >
                              Refresh Page
                           </button>
                           <button
                              onClick={() => window.location.href = '/'}
                              className="px-4 py-2 border border-yellow text-yellow rounded-lg hover:bg-yellow-50 transition-all"
                           >
                              Go to Homepage
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            );
         }

         // Show simple error message in production
         return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
               <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
                  <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
                  <div className="flex gap-4 justify-center">
                     <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-yellow text-white rounded-lg hover:bg-yellow-600 transition-all"
                     >
                        Refresh Page
                     </button>
                     <button
                        onClick={() => window.location.href = '/'}
                        className="px-4 py-2 border border-yellow text-yellow rounded-lg hover:bg-yellow-50 transition-all"
                     >
                        Go to Homepage
                     </button>
                  </div>
               </div>
            </div>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary; 