import React from 'react'
import { Card, Button, VStack, Text } from '@chakra-ui/react'
import { gql, useQuery } from 'urql'

const InfoQuery = gql`
	query {
		info {
			id
			DEV
			api
			build_date
			city
			colo
			last_build
			now
			status
		}
	}
`

const Example = () => {
	const [result, reexecuteQuery] = useQuery({
		query: InfoQuery,
	})

	const { data, fetching, stale } = result

	return (
		<Card.Root width="320px" variant={'elevated'}>
			<Card.Body gap="2">
				<Card.Title mb="2">Hello world</Card.Title>
				<Card.Description>
					<VStack>
						<Text>This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
						<Text>{fetching || stale ? 'Loading' : JSON.stringify(data, undefined, 2)}</Text>
					</VStack>
				</Card.Description>
			</Card.Body>
			<Card.Footer justifyContent="flex-end">
				<Button variant="outline">View</Button>
				<Button onClick={reexecuteQuery}>Run</Button>
			</Card.Footer>
		</Card.Root>
	)
}

export default Example
