interface IconProps {
  className?: string;
}

export const UserIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" 
      fill="currentColor"
      fillOpacity="0.85"
    />
    <path 
      d="M12 13C7.03228 13 3 15.6907 3 19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19C21 15.6907 16.9677 13 12 13Z" 
      fill="currentColor"
      fillOpacity="0.8"
    />
  </svg>
)

export const SettingsIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16.1667 10C16.1667 10.3333 16.1333 10.6667 16.0667 11L17.8667 12.4C18.0333 12.5333 18.0667 12.7667 17.9667 12.9333L16.3 15.7667C16.2 15.9333 15.9667 16 15.8 15.9333L13.7 15.1C13.2333 15.4333 12.7333 15.7 12.2 15.9L11.8667 18.1333C11.8333 18.3333 11.6667 18.5 11.4667 18.5H8.13333C7.93333 18.5 7.76667 18.3333 7.73333 18.1333L7.4 15.9C6.86667 15.7 6.36667 15.4333 5.9 15.1L3.8 15.9333C3.63333 16 3.4 15.9333 3.3 15.7667L1.63333 12.9333C1.53333 12.7667 1.56667 12.5333 1.73333 12.4L3.53333 11C3.46667 10.6667 3.43333 10.3333 3.43333 10C3.43333 9.66667 3.46667 9.33333 3.53333 9L1.73333 7.6C1.56667 7.46667 1.53333 7.23333 1.63333 7.06667L3.3 4.23333C3.4 4.06667 3.63333 4 3.8 4.06667L5.9 4.9C6.36667 4.56667 6.86667 4.3 7.4 4.1L7.73333 1.86667C7.76667 1.66667 7.93333 1.5 8.13333 1.5H11.4667C11.6667 1.5 11.8333 1.66667 11.8667 1.86667L12.2 4.1C12.7333 4.3 13.2333 4.56667 13.7 4.9L15.8 4.06667C15.9667 4 16.2 4.06667 16.3 4.23333L17.9667 7.06667C18.0667 7.23333 18.0333 7.46667 17.8667 7.6L16.0667 9C16.1333 9.33333 16.1667 9.66667 16.1667 10Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

export const LogoutIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M13.3333 14.1667L17.5 10L13.3333 5.83334" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.5 10H7.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

export const VideosIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" 
      fill="currentColor"/>
  </svg>
)

export const HistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

export const YoutubeIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
      fill="currentColor"
    />
  </svg>
)

export const RutubeIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M19.5733 4.42669C17.4267 2.28002 14.6133 1.33335 11.7333 1.33335C6.01333 1.33335 1.33333 6.01335 1.33333 11.7334C1.33333 17.4534 6.01333 22.1334 11.7333 22.1334C17.4533 22.1334 22.1333 17.4534 22.1333 11.7334C22.1333 8.85335 21.1867 6.04002 19.5733 4.42669ZM15.7333 12.4L10.28 15.8667C10.2133 15.9067 10.1333 15.9334 10.0533 15.9334C9.97333 15.9334 9.89333 15.9067 9.82667 15.8667C9.68 15.7734 9.58667 15.6134 9.58667 15.4V8.46669C9.58667 8.25335 9.68 8.09335 9.82667 8.00002C9.97333 7.90669 10.1467 7.90669 10.28 8.00002L15.7333 11.4667C15.88 11.56 15.9733 11.72 15.9733 11.9334C15.9733 12.1467 15.88 12.3067 15.7333 12.4Z" 
      fill="currentColor"
    />
  </svg>
)

export const VKIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.51-.743.673-1.021.673-.139 0-.341-.163-.341-.628V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.788.65.869 2.138v3.228c0 .707-.128.836-.406.836-.743 0-2.551-2.729-3.624-5.853-.209-.606-.42-.847-.98-.847H2.752c-.627 0-.752.295-.752.619 0 .582.742 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.132-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.193c.627 0 .94-.313.759-.932-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001 0 2.672-3.761 2.95-5.04z" 
      fill="currentColor"
    />
  </svg>
) 