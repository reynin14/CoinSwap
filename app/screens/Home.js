import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote");
  };

	handleTextChange = (text) => {
		console.log('change text', text);
	};

  handleSwapCurrency = () => {
    console.log('Press Swap Currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
				<InputWithButton
					buttonText={TEMP_BASE_CURRENCY}
					onPress={this.handlePressBaseCurrency}
					defaultValue={TEMP_BASE_PRICE}
					keyboardType="numeric"
					onChangeText={this.handleTextChange}
				/>
				<InputWithButton
					onPress={this.handlePressQuoteCurrency}
					buttonText={TEMP_QUOTE_CURRENCY}
					editable={false}
					value={TEMP_QUOTE_PRICE}
				/>
      <ClearButton
        text="Reverse Currencies"
        onPress={this.handleSwapCurrency}
      />

      </Container>
    );
  }
}

export default Home;
