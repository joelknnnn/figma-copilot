import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface BlogPostCardProps {
  timestamp: string;
  title: string;
  description: string;
  onReadMore?: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  timestamp,
  title,
  description,
  onReadMore,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        flex: '1 0 0',
        minWidth: theme.spacing(27.5), // 220px
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(1), // 8px
          alignItems: 'flex-end',
          p: theme.spacing(1.5, 2), // 12px 16px
          '&:last-child': {
            pb: theme.spacing(1.5), // 12px
          },
        }}
      >
        {/* Timestamp and Title */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            {timestamp}
          </Typography>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            width: '100%',
          }}
        >
          {description}
        </Typography>

        {/* Read More Button */}
        <Button
          variant="text"
          size="small"
          onClick={onReadMore}
          endIcon={
            <ArrowForwardIcon
              sx={{
                fontSize: theme.spacing(2.25), // 18px
                width: theme.spacing(2), // 16px
                height: theme.spacing(2.25), // 18px
              }}
            />
          }
          sx={{
            px: theme.spacing(0.625), // 5px
            py: theme.spacing(0.5), // 4px
          }}
        >
          Lue lisää
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
