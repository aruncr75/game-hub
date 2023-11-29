import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre: Genre | null;
// }

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  return (
    <ul>
      {genres.map(genre =><li key={genre.id}>{genre.name} </li>)}
    </ul>
  );
};

export default GenreList;
