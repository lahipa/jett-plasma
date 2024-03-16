"use client";

import React, { forwardRef } from 'react';
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';

const ClientProvider = ({children}) => {

    const queryClient = new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
    
          },
        }),
    });
    
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ClientProvider;