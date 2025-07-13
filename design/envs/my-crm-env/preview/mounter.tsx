import React, { ReactNode } from 'react';
import { createMounter } from '@teambit/react.mounter';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';

/**
 * Provides the MyCrmTheme to component compositions.
 * This ensures that all component previews are rendered within the standard CRM theme.
 * @param {object} props - The properties for the provider.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The provider component.
 */
export function MyCrmEnvProvider({ children }: { children: ReactNode }): JSX.Element {
  return <MyCrmTheme>{children}</MyCrmTheme>;
}

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * This mounter wraps compositions with the MyCrmTheme provider.
 * @see https://bit.dev/docs/react-env/component-previews#composition-mounter
 */
export default createMounter(MyCrmEnvProvider);