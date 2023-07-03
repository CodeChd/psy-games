import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  //this is more modular so this component is responsible for returning our markup/ui
  const { data, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>Oops.. There's Something Wrong</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {/* loading state */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {/* display fetched games */}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}

      </SimpleGrid>
    </>
  );
};

export default GameGrid;
