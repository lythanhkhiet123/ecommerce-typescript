import React from 'react';
import './style.tsx';

import {
  ShopQualityContainerDiv,
  QualityItemContainerDiv,
  SupportLocalDiv,
  HighQualityDiv,
  EcoFriendlyDiv,
} from './style';

export const ShopQuality: React.FC = () => {
  return (
    <ShopQualityContainerDiv>
      <QualityItemContainerDiv>
        <SupportLocalDiv />
        <h3> Support Local </h3>
        <p>
          All materials come from local producers. Together we can create a
          stronger and better community.
        </p>
      </QualityItemContainerDiv>
      <QualityItemContainerDiv>
        <HighQualityDiv />
        <h3> High Quality </h3>
        <p>Materials used are high quality proves to last for many years.</p>
      </QualityItemContainerDiv>
      <QualityItemContainerDiv>
        <EcoFriendlyDiv />
        <h3> Eco Friendly </h3>
        <p>
          Rest assured that the process and materials used will never harm our
          environment.
        </p>
      </QualityItemContainerDiv>
    </ShopQualityContainerDiv>
  );
};
