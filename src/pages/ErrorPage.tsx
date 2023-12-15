import React from 'react';
import {
  Heading,
  Box,
  Text,
  Button,
  IconButton,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const errorMessage = is404
    ? "Uh oh! Looks like you've stumbled into a cosmic void. "
    : "Something unexpected glitched in the hyperdrive! We're fixing it. ";

  return (
    <Center bg="gray.800" minH="screen" p={4} color="gray.200">
      <Box
        rounded="lg"
        shadow="md"
        bg="gray.700"
        w="500px"
        p={4}
        textAlign="center"
      >
        <Heading fontSize="2xl" mb="4" color="gray.100">
          Whoops!
        </Heading>
        {is404 ? (
          <Box>
            <Text as="p" fontSize="lg" mb="4">
              {errorMessage}
            </Text>
            {/* <IconButton
              // icon="search"
              aria-label="Search"
              onClick={() => window.location.href = '/'}
              size="lg"
              variant="outline"
              colorScheme="gray.400"
              mr={4}
            /> */}
            <Button
              colorScheme="primary"
              variant="outline"
              marginRight={5}
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
            <Button
              colorScheme="primary"
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Go Back
            </Button>
          </Box>
        ) : (
          <Box>
            <Spinner size="lg" color="gray.400" marginBottom={4} />
            <Text as="p" fontSize="lg" mb="4">
              {errorMessage}
            </Text>
            <Button colorScheme="primary" onClick={() => window.location.reload()}>
              Engage Emergency Warp
            </Button>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default ErrorPage;
