'use client'

import { RedocStandalone } from 'redoc';

export default function Home() {
  return (
    <div className="h-screen w-full" style={{colorScheme: 'light'}}>
      <RedocStandalone specUrl="/api/docs"
      
      options={{
        nativeScrollbars: true,
        hideDownloadButton: true,
        hideLoading: true,
        hideHostname: true,
        theme: {
          colors: {
            primary: {
              main: '#6366f1'
            },
          },
          logo: {
            maxWidth: "180px",
            gutter: "25px 0px 25px 25px"
          }
        },
      }}
      />
    </div>
  )
}
