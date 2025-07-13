import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyCrmTheme } from "@my-crm/design.my-crm-theme";
import { Paragraph } from './paragraph.js';

const crmContent = {
  customerEngagement: "Engage with your customers effectively through personalized communication. Our CRM platform helps you track every interaction, ensuring no opportunity is missed and every customer feels valued. Build lasting relationships by understanding their needs and responding promptly.",
  salesPipeline: "Manage your sales pipeline with clarity and precision. Visualize your sales stages, identify bottlenecks, and forecast revenue more accurately. Empower your sales team to close deals faster and more efficiently.",
  reportingAnalytics: "Gain valuable insights into your business performance with comprehensive reporting and analytics. Track key metrics, understand customer behavior, and make data-driven decisions to optimize your strategies and drive growth.",
  serviceSupport: "Provide exceptional customer service and support. Our platform enables you to manage support tickets, track issues to resolution, and build a comprehensive knowledge base. Keep your customers happy and loyal with timely and effective support."
};

export const BasicParagraph = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <Paragraph>
        {crmContent.customerEngagement}
      </Paragraph>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ParagraphAsDiv = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <Paragraph element="div">
        This content is rendered within a 'div' tag instead of the default 'p' tag. 
        It's useful when you need a block-level element for styling or layout purposes, 
        but semantically it's still a paragraph of text. For example, this could be a short description in a card component.
      </Paragraph>
    </MyCrmTheme>
  </MemoryRouter>
);

export const ParagraphWithCustomStyling = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <Paragraph
        className="custom-paragraph-class"
        style={{ 
          color: 'var(--colors-text-emphasis)', 
          fontStyle: 'italic',
          borderLeft: '3px solid var(--colors-primary-default)',
          paddingLeft: 'var(--spacing-small)' 
        }}
      >
        {crmContent.reportingAnalytics} This paragraph has additional custom styling applied via both a CSS class and inline styles.
        The text color is emphasized, it's italicized, and has a distinct left border.
      </Paragraph>
    </MyCrmTheme>
  </MemoryRouter>
);

export const MultipleParagraphs = () => (
  <MemoryRouter>
    <MyCrmTheme>
      <Paragraph>
        {crmContent.salesPipeline}
      </Paragraph>
      <Paragraph>
        {crmContent.serviceSupport}
      </Paragraph>
      <Paragraph>
        This is the final paragraph in this sequence. Notice the consistent spacing between paragraphs,
        and how the last paragraph typically doesn't have bottom margin if styled to avoid extra space at the end of a content block.
        Our paragraph component handles this gracefully.
      </Paragraph>
    </MyCrmTheme>
  </MemoryRouter>
);