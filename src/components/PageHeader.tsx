import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumb,
  title,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: theme.spacing(2),
        mb: theme.spacing(2),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Title and Breadcrumbs */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
          }}
        >
          {/* Breadcrumbs */}
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            {breadcrumb}
          </Typography>

          {/* Page Title */}
          <Typography variant="h4">{title}</Typography>
        </Box>

        {/* Action Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(1.5),
            }}
          >
            {secondaryButtonText && (
              <Button
                variant="outlined"
                onClick={onSecondaryClick}
                sx={{
                  px: theme.spacing(2),
                  py: theme.spacing(0.75),
                }}
              >
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={onPrimaryClick}
                sx={{
                  px: theme.spacing(2),
                  py: theme.spacing(0.75),
                }}
              >
                {primaryButtonText}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PageHeader;
