import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CardSectionProps {
  heading: string;
  showAllText?: string;
  onShowAll?: () => void;
  children: React.ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({
  heading,
  showAllText = 'Näytä kaikki',
  onShowAll,
  children,
}) => {
  const theme = useTheme();

  return (
    <Box>
      {/* Card Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: theme.spacing(1.5),
          pb: theme.spacing(1),
        }}
      >
        <Typography variant="h6">{heading}</Typography>
        {onShowAll && (
          <Button
            variant="text"
            size="small"
            onClick={onShowAll}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  fontSize: theme.spacing(2.25), // 18px
                }}
              />
            }
            sx={{
              px: theme.spacing(0.625),
              py: theme.spacing(0.5),
            }}
          >
            {showAllText}
          </Button>
        )}
      </Box>

      {/* Card Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: theme.spacing(1.5),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CardSection;
