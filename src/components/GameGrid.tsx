import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  seletedGenre: Genre | null;
}

const GameGrid = ({ seletedGenre }: Props) => {
  //this is more modular so this component is responsible for returning our markup/ui
  const { data, error, isLoading } = useGames(seletedGenre);

  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>Oops.. There's Something Wrong</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
        spacing={3}
      >
        {/* loading state */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {/* display fetched games */}
        
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
