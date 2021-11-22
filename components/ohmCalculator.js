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

const OhmCalculator = () => {
  const STAKED_OHM = 70;
  const OHM_MANUAL_PRICE = 1000;
  const OHM_LIVE_PRICE = 800;
  const REBASE_RATE = 0.4061;

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
  const weeklyROI = dailyROI * 7;
  // Monthly ROI %
  const monthlyROI = dailyROI * 30;
  // Yearly ROI %
  const yearlyROI = rebaseRate * (365 * 3);

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
    };

    watch('stakedOhm');

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
        <SimpleGrid columns="2">
          <Box>Rebase Rate: {rebaseRate}</Box>
          <Box>Rebase Rate: {rebaseRate}</Box>
        </SimpleGrid>

        <Inputs />

        <h3>Basic Inputs</h3>
        <p>OHM Staked: {stakedOhm} OHM</p>
        <p>OHM Live Price: ${ohmLivePrice}</p>
        <p>OHM Manual Price: ${ohmManualPrice}</p>
        <p>Rebase Rate: {rebaseRate}%</p>

        <h3>Basic Outputs</h3>
        <p>Current Worth ${currentWorth}</p>
        <p>Daily ROI: {dailyROI}%</p>
        <p>Weekly ROI: {weeklyROI}%</p>
        <p>Monthly ROI: {monthlyROI}%</p>
        <p>Yearly ROI: {yearlyROI}%</p>

        <h3>Goal Targeter</h3>
        <p>USD Target: ${usdTarget}</p>
        <p>
          {usdTargetCalculated} Days Until ${usdTarget}
        </p>

        <p>OHM Target</p>
        <p>Days Until {ohmTargetCalculated}</p>
      </Box>
    </>
  );
};

export default OhmCalculator;
