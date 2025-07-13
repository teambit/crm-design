import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Flex } from './flex.js';

// Common styles for the items within the Flex component for demonstration
const baseItemStyle: React.CSSProperties = {
  padding: 'var(--spacing-default)',
  border: 'var(--borders-default-width) var(--borders-default-style) var(--colors-divider)',
  borderRadius: 'var(--borders-radius-medium)',
  color: 'var(--colors-text-primary)',
  backgroundColor: 'var(--colors-surface-secondary)',
  fontFamily: 'var(--typography-font-family)',
  fontSize: 'var(--typography-sizes-body-default)',
  minWidth: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const itemStyle1: React.CSSProperties = {
  ...baseItemStyle,
  minHeight: '60px',
};

const itemStyle2: React.CSSProperties = {
  ...baseItemStyle,
  minHeight: '80px',
  backgroundColor: 'var(--colors-surface-tertiary)',
};

const itemStyle3: React.CSSProperties = {
  ...baseItemStyle,
  minHeight: '40px',
};

const containerStyle: React.CSSProperties = {
  backgroundColor: 'var(--colors-surface-primary)',
  padding: 'var(--spacing-small)',
  border: '1px dashed var(--colors-divider)',
  borderRadius: 'var(--borders-radius-large)',
};

export const BasicRowLayout = () => (
  <MemoryRouter>
    <Flex style={containerStyle} gap="var(--spacing-small)">
      <div style={itemStyle1}>Item 1</div>
      <div style={itemStyle2}>Item 2</div>
      <div style={itemStyle1}>Item 3</div>
    </Flex>
  </MemoryRouter>
);

export const BasicColumnLayout = () => (
  <MemoryRouter>
    <Flex direction="column" style={{ ...containerStyle, height: '300px' }} gap="var(--spacing-small)">
      <div style={itemStyle1}>Item A</div>
      <div style={itemStyle2}>Item B</div>
      <div style={itemStyle3}>Item C</div>
    </Flex>
  </MemoryRouter>
);

export const JustifyAndAlignExample = () => (
  <MemoryRouter>
    <Flex
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{ ...containerStyle, height: '150px' }}
      gap="var(--spacing-small)"
    >
      <div style={itemStyle1}>Tall Item</div>
      <div style={itemStyle3}>Short Item</div>
      <div style={itemStyle2}>Medium Item</div>
    </Flex>
  </MemoryRouter>
);

export const WrapAndGapExample = () => (
  <MemoryRouter>
    <Flex
      wrap="wrap"
      gap="var(--spacing-medium)"
      rowGap="var(--spacing-default)"
      columnGap="var(--spacing-xs)"
      style={{ ...containerStyle, width: '350px' }}
      alignItems="flex-start" // To make wrap behavior clearer if items have different heights
    >
      <div style={itemStyle1}>Child 1</div>
      <div style={itemStyle2}>Child 2 (Wider)</div>
      <div style={itemStyle3}>Child 3</div>
      <div style={itemStyle1}>Child 4</div>
      <div style={itemStyle2}>Child 5</div>
      <div style={itemStyle1}>Child 6</div>
    </Flex>
  </MemoryRouter>
);