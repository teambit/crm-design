import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from '@my-crm/design.my-crm-theme';
import { Card } from './card.js';
import styles from './card.module.scss'; // Import to allow using its classes if needed for custom content

const commonCardStyle: React.CSSProperties = {
  maxWidth: '400px',
  margin: 'var(--spacing-medium)',
};

const buttonStyle: React.CSSProperties = {
  padding: 'var(--spacing-xs) var(--spacing-small)',
  margin: '0 var(--spacing-xs)',
  backgroundColor: 'var(--colors-primary-default)',
  color: 'var(--colors-text-inverse)',
  border: 'none',
  borderRadius: 'var(--borders-radius-small)',
  cursor: 'var(--interactions-cursor-pointer)',
  fontSize: 'var(--typography-sizes-label-default)',
  fontWeight: 'var(--typography-font-weight-medium)',
};

export const BasicCard = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--colors-surface-background)' }}>
        <Card title="Customer Profile" style={commonCardStyle}>
          <p style={{ fontSize: 'var(--typography-sizes-body-default)', color: 'var(--colors-text-secondary)' }}>
            <strong>Name:</strong> Jane Doe<br />
            <strong>Email:</strong> jane.doe@example.com<br />
            <strong>Company:</strong> Acme Corp<br />
            <strong>Status:</strong> Active Lead
          </p>
        </Card>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const CardWithImage = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--colors-surface-background)' }}>
        <Card
          title="New Product Launch"
          image="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMkMlMjBjcm0lMkMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfDB8fGJsdWV8MTc0NzMxNTU3NXww&ixlib=rb-4.1.0"
          imageAlt="Modern office setup with a person using a laptop"
          style={commonCardStyle}
        >
          <p style={{ fontSize: 'var(--typography-sizes-body-default)', color: 'var(--colors-text-secondary)' }}>
            Our latest CRM integration tool is now live. Enhance your workflow and boost productivity.
          </p>
          <button style={buttonStyle}>Learn More</button>
        </Card>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const CardWithHeaderAndFooter = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--colors-surface-background)' }}>
        <Card
          header={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 className={styles.title} style={{ margin: 0, fontSize: 'var(--typography-sizes-heading-h5)' }}>Deal Progress</h4>
              <span style={{ fontSize: 'var(--typography-sizes-caption-default)', color: 'var(--colors-status-info-default)' }}>
                75% Complete
              </span>
            </div>
          }
          footer={
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{...buttonStyle, backgroundColor: 'var(--colors-actions-edit)'}}>Edit</button>
              <button style={{...buttonStyle, backgroundColor: 'var(--colors-actions-archive)'}}>Archive</button>
            </div>
          }
          style={commonCardStyle}
        >
          <p style={{ fontSize: 'var(--typography-sizes-body-default)', color: 'var(--colors-text-secondary)' }}>
            <strong>Client:</strong> Tech Solutions Inc.<br />
            <strong>Value:</strong> $50,000<br />
            <strong>Next Step:</strong> Final Proposal Submission
          </p>
        </Card>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const InteractiveElevatedCard = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--colors-surface-background)' }}>
        <Card
          title="Upcoming Task: Follow-up Call"
          image="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMkMlMjBjcm0lMkMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfDB8fGJsdWV8MTc0NzMxNTU3NXww&ixlib=rb-4.1.0"
          imageAlt="Woman on a phone call in an office"
          variant="elevated"
          interactive
          style={commonCardStyle}
          className="custom-clickable-card"
        >
          <p style={{ fontSize: 'var(--typography-sizes-body-default)', color: 'var(--colors-text-secondary)' }}>
            This card represents an upcoming task. Click to view details. It uses the 'elevated' variant for a more prominent look.
          </p>
          <p style={{ fontSize: 'var(--typography-sizes-caption-small)', color: 'var(--colors-text-muted)' }}>
            Due: Tomorrow, 10:00 AM
          </p>
        </Card>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);

export const OutlinedCard = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <div style={{ padding: 'var(--spacing-large)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--colors-surface-background)' }}>
        <Card
          title="Service Ticket #12345"
          variant="outlined"
          interactive
          style={commonCardStyle}
        >
          <p style={{ fontSize: 'var(--typography-sizes-body-default)', color: 'var(--colors-text-secondary)' }}>
            <strong>Issue:</strong> Unable to login.<br />
            <strong>Reported by:</strong> John Smith<br />
            <strong>Priority:</strong> High
          </p>
          <span style={{ fontSize: 'var(--typography-sizes-label-small)', color: 'var(--colors-status-negative-default)', fontWeight: 'var(--typography-font-weight-medium)' }}>
              Awaiting Support
          </span>
        </Card>
      </div>
    </MyCrmTheme>
  </MemoryRouter>
);