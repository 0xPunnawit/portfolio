import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Brand marks are drawn by hand so the site keeps a single visual voice.
 * They inherit `currentColor` and stay neutral in both reading modes.
 */

export function GitHubMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.88 2.34.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.96 0-.88.31-1.6.83-2.16-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.52.56.83 1.28.83 2.16 0 3.08-1.88 3.76-3.67 3.95.29.25.54.73.54 1.48l-.01 2.19c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  );
}

export function LinkedInMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M3.6 2.2a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM.5 5.1h3v8.9h-3V5.1Zm5 0h2.9v1.2h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.62 2.02 3.62 4.64v4.62h-3v-4.1c0-.98-.02-2.24-1.36-2.24-1.36 0-1.57 1.07-1.57 2.17v4.17h-3V5.1Z" />
    </svg>
  );
}

export function FacebookMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M9.4 16V8.7h2.44l.37-2.84H9.4V4.05c0-.82.23-1.38 1.4-1.38h1.5V.11C12.04.08 11.1 0 10.01 0 7.75 0 6.2 1.38 6.2 3.92V5.86H3.75V8.7H6.2V16h3.2Z" />
    </svg>
  );
}

export function YouTubeMark(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 14"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 0h15.2A2.4 2.4 0 0 1 20 2.4v9.2a2.4 2.4 0 0 1-2.4 2.4H2.4A2.4 2.4 0 0 1 0 11.6V2.4A2.4 2.4 0 0 1 2.4 0Zm5.2 3.4v7.2L13.9 7 7.6 3.4Z"
      />
    </svg>
  );
}
