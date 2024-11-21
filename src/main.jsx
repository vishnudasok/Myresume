import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import PricingSection from './pages/Pricing.jsx';
import TestimonialsPage from './pages/Testimonial.jsx';
import ContactPage from './pages/contact.jsx';
import FeaturesSection from './pages/Features.jsx';
import Cart from './pages/cart/cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pricing',
        element: <PricingSection />
      },
      {
        path: '/testimonial',
        element: <TestimonialsPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/features',
        element: <FeaturesSection />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <div>404 - Page Not Found</div>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
