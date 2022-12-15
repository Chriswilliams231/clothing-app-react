import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  ContentBody,
  DirectoryItemContainer,
  ContentTitle,
  ContentSubtitle
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route, size } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer size={size} onClick={onNavigateHandler}>
      <BackgroundImage classname="background-image" imageUrl={imageUrl} />
      <ContentBody className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
