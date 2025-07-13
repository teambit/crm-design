import { useTheme } from './my-crm-theme-provider.js';
import { MyCrmTheme } from './my-crm-theme.js';
import { TokenViewer } from '@bitdesign/sparks.sparks-theme';
import { useThemeController } from './theme-controller.js';

function ViewTokens() {
  const theme = useTheme();
  return <TokenViewer theme={theme} />;
}

function SampleContentWithThemeToggle() {
  const { themeMode, toggleTheme, setThemeMode } = useThemeController();
  const theme = useTheme();

  const cardStyle: React.CSSProperties = {
    padding: theme.spacing.default,
    margin: `${theme.spacing.medium} 0`,
    backgroundColor: theme.colors.surface.primary,
    border: `1px solid ${theme.colors.divider}`,
    borderRadius: theme.borders.radius.medium,
    boxShadow: theme.effects.shadows.small,
    color: theme.colors.text.primary,
  };

  const buttonStyle: React.CSSProperties = {
    padding: `${theme.spacing.small} ${theme.spacing.default}`,
    margin: theme.spacing.small,
    backgroundColor: theme.colors.primary.default,
    color: theme.colors.text.inverse,
    border: 'none',
    borderRadius: theme.borders.radius.small,
    cursor: 'pointer',
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.sizes.body.default,
  };
  
  const headingStyle: React.CSSProperties = {
    fontSize: theme.typography.sizes.heading.h3,
    color: theme.colors.text.emphasis,
    marginBottom: theme.spacing.small,
  }

  const textStyle: React.CSSProperties = {
    fontSize: theme.typography.sizes.body.medium,
    lineHeight: theme.typography.lineHeight.base,
  }

  return (
    <div style={{ padding: theme.spacing.large, fontFamily: theme.typography.fontFamily }}>
      <h2 style={headingStyle}>Current Theme: {themeMode}</h2>
      <button style={buttonStyle} onClick={toggleTheme}>Toggle Theme</button>
      <button style={{...buttonStyle, backgroundColor: theme.colors.status.info.default}} onClick={() => setThemeMode('light')}>Set Light</button>
      <button style={{...buttonStyle, backgroundColor: theme.colors.status.neutral.default}} onClick={() => setThemeMode('dark')}>Set Dark</button>

      <div style={cardStyle}>
        <h3 style={headingStyle}>Sample Card</h3>
        <p style={textStyle}>This is a sample card element demonstrating the theme's styling for surfaces, text, and spacing.</p>
        <button style={{...buttonStyle, backgroundColor: theme.colors.actions.create }}>Create New</button>
      </div>

       <ViewTokens />
    </div>
  );
}


export const LightTheme = () => {
  return (
    <MyCrmTheme initialTheme='light'>
      <SampleContentWithThemeToggle />
    </MyCrmTheme>
  );
};

export const DarkTheme = () => {
  return (
    <MyCrmTheme initialTheme='dark'>
      <SampleContentWithThemeToggle />
    </MyCrmTheme>
  );
};

export const ThemeWithOverrides = () => {
  return (
    <MyCrmTheme
      overrides={{
        colors: {
          primary: {
            default: '#ff6f00', // Custom primary color
            hover: '#ff8f00',
            active: '#e65100',
          },
          text: {
            primary: '#333333',
          }
        },
        typography: {
          fontFamily: "'Georgia', serif",
        },
        spacing: {
          default: '20px',
        },
      }}
    >
      <SampleContentWithThemeToggle />
    </MyCrmTheme>
  );
}