import { useState, useEffect } from 'react';
import { Heading, Text, Box, FormControl, Input, Button, FormLabel, FormErrorMessage, SimpleGrid } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// OHM Staking Calculator
// Input Fields
// Dollars as OHM Tokens
// OHM Tokens as Dollars

// Pull Automatic Prices
// OHM Live Price
// OHM Rebase Rate
//

// Features to add:
// Currenty Converter
// Red Live Price Tag in upper left

// Weeks Months Years Calculator
//

// Goal Targeter

// Income Targeter
// USD Target
// Days until Target
// OHM Target
// Days Untill OHM Target

// Tools
// USD Formatter
const moneyFormatter = (money) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(money);

  return formatted;
};

// Percentage Formatter
const percentageFormatter = (percent) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(percent);

  return formatted;
};

const OhmCalculator = () => {
  const STAKED_OHM = 70;
  const OHM_MANUAL_PRICE = 1000;
  const OHM_LIVE_PRICE = 800;
  const REBASE_RATE = 0.004061;

  const [stakedOhm, setStakedOhm] = useState(STAKED_OHM);
  const [ohmManualPrice, setOhmManualPrice] = useState(OHM_MANUAL_PRICE);
  const [ohmLivePrice, setOhmLivePrice] = useState(OHM_LIVE_PRICE);
  const [rebaseRate, setRebaseRate] = useState(REBASE_RATE);
  const [isLivePrices, setIsLivePrices] = useState(false);

  const [usdTarget, setUsdTarget] = useState(100000);

  const ohmCalculatedPrice = isLivePrices ? ohmLivePrice : ohmManualPrice;

  // Goal Targeter
  const usdTargetCalculated = Math.log(usdTarget / (ohmCalculatedPrice / 3));
  const ohmTargetCalculated = Math.log(usdTarget / (ohmCalculatedPrice / 3));

  const currentWorth = stakedOhm * ohmCalculatedPrice;

  // Daily ROI %
  const dailyROI = rebaseRate * 3;
  //   const weeklyROI = Math.pow(100.41, 21) - 1;
  // Weekly ROI %
  const weeklyROI = Math.pow(rebaseRate + 1, 7 * 3) - 1;
  // Monthly ROI %
  const monthlyROI = Math.pow(rebaseRate + 1, 30 * 3) - 1;
  // Yearly ROI %
  // (D7+1)^1095 -1
  const yearlyROI = Math.pow(rebaseRate + 1, 365 * 3) - 1;
  //   const yearlyROI = yearlyROICalc.toLocaleString('en', { style: 'percent' });

  //   const yearlyROI = rebaseRate * (365 * 3);

  // Weekly ROI %
  // Monthly ROI %

  //   useEffect(() => {
  //     console.log('OhmCalculator');
  //     console.log(ohmAsUSD);
  //   }, []);

  const Inputs = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (values) => {
      console.log(values);
      //   sendJob(values);
      //    onClose();
      setStakedOhm(Number(values.stakedOhm));
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="4">
            <FormLabel htmlFor="stakedOhm">How many OHM will you stake?</FormLabel>
            <Input placeholder="70" type="number" {...register('stakedOhm', { required: true })} />
            {errors.stakedOhm && <FormErrorMessage>This field is required</FormErrorMessage>}
            <Text>Thats currently worth: ${currentWorth}</Text>
          </FormControl>

          <Button mt={4} mb={4} colorScheme="blue" type="submit">
            Save Settings
          </Button>
        </form>
      </>
    );
  };

  return (
    <>
      <Box>
        <Heading mb="4">Ω Olympus DAO Calc</Heading>
        <SimpleGrid columns="4" mb="8">
          <Box>
            <Heading size="lg" mb={2}>
              {percentageFormatter(rebaseRate)}
            </Heading>
            <Text>Rebase Rate</Text>
          </Box>
          <Box>
            <Heading size="lg" mb={2}>
              {percentageFormatter(dailyROI)}
            </Heading>
            <Text>Daily ROI</Text>
          </Box>
          <Box>
            <Heading size="lg" mb={2}>
              {percentageFormatter(weeklyROI)}
            </Heading>
            <Text>Weekly ROI</Text>
          </Box>
          <Box>
            <Heading size="lg" mb={2}>
              {percentageFormatter(monthlyROI)}
            </Heading>
            <Text>Monthly ROI</Text>
          </Box>
        </SimpleGrid>

        <Inputs />

        <Heading>Basic Inputs</Heading>
        <p>OHM Staked: {stakedOhm} OHM</p>
        <p>OHM Live Price: {moneyFormatter(ohmLivePrice)}</p>
        <p>OHM Manual Price: {moneyFormatter(ohmManualPrice)}</p>
        <p>Rebase Rate: {percentageFormatter(rebaseRate)}</p>

        <Heading>Basic Outputs</Heading>
        <p>Current Worth {moneyFormatter(currentWorth)}</p>
        <p>Daily ROI: {percentageFormatter(dailyROI)}</p>
        <p>Weekly ROI: {percentageFormatter(weeklyROI)}</p>
        <p>Monthly ROI: {percentageFormatter(monthlyROI)}</p>
        <p>Yearly ROI: {percentageFormatter(yearlyROI)}</p>

        <Heading>Goal Targeter</Heading>
        <p>USD Target: {moneyFormatter(usdTarget)}</p>
        <p>
          {usdTargetCalculated} Days Until {moneyFormatter(usdTarget)}
        </p>

        <p>OHM Target</p>
        <p>Days Until {ohmTargetCalculated}</p>
      </Box>
    </>
  );
};

export default OhmCalculator;
