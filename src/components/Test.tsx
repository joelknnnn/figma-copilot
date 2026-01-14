import React from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageHeader from './PageHeader';
import CardSection from './CardSection';
import BlogPostCard from './BlogPostCard';

interface TestProps {
  // Add any props if needed for dynamic content
}

interface BlogPost {
  id: number;
  timestamp: string;
  title: string;
  description: string;
}

const Test: React.FC<TestProps> = () => {
  const theme = useTheme();

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      timestamp: '8. Helmikuuta 2025 | 16:00',
      title: 'Lorem Ipsum',
      description: 'Similique magnam dolore autem nulla quod incidunt. Deleniti pariatur dolorem sed sint non alias voluptas quibusdam. Et dolores illum enim. Eos ut explicabo et quia in excepturi nobis.',
    },
    {
      id: 2,
      timestamp: '8. Helmikuuta 2025 | 16:00',
      title: 'Lorem Ipsum',
      description: 'Similique magnam dolore autem nulla quod incidunt. Deleniti pariatur dolorem sed sint non alias voluptas quibusdam. Et dolores illum enim. Eos ut explicabo et quia in excepturi nobis.',
    },
    {
      id: 3,
      timestamp: '8. Helmikuuta 2025 | 16:00',
      title: 'Lorem Ipsum',
      description: 'Similique magnam dolore autem nulla quod incidunt. Deleniti pariatur dolorem sed sint non alias voluptas quibusdam. Et dolores illum enim. Eos ut explicabo et quia in excepturi nobis.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          pt: 0,
          pb: theme.spacing(3),
          px: theme.spacing(3),
          mx: 'auto',
        }}
      >
        <PageHeader
          breadcrumb="Etusivu"
          title="Page Header"
          primaryButtonText="Primary"
          secondaryButtonText="Secondary"
        />

        <CardSection heading="Heading">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              timestamp={post.timestamp}
              title={post.title}
              description={post.description}
            />
          ))}
        </CardSection>
      </Container>
    </Box>
  );
};

export default Test;