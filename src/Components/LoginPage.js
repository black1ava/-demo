import React, { useState, useCallback } from 'react';
import { Card, Form, TextField, Button, Stack, Toast, Frame } from '@shopify/polaris'

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginToastActive, setLoginToastActive] = useState(false);

  const handleEmailChange = useCallback(value => setEmail(value), []);

  const handlePasswordChange = useCallback(value => setPassword(value), []);

  const handleEmailClear = useCallback(() => setEmail(''), []);

  const handlePassowrdClear = useCallback(() => setPassword(''), []);

  const handleLoginToastToggle = useCallback(() => setLoginToastActive(active => !active), []);

  const toastMarkUp = loginToastActive && <Toast content="Login Successfully" onDismiss={ handleLoginToastToggle }/>

  const handleSubmit = useCallback(() => {

    if(email === 'test123@test.com' && password === 'test1234'){

      handleLoginToastToggle();
      handleEmailClear();
      handlePassowrdClear();

    }

  }, [email, password, handleLoginToastToggle, handleEmailClear, handlePassowrdClear]);


  return (
    <div>
      <Frame>
        <div className="container">
          <Card>
            <Card.Section>
              <div className="logo">
                <img 
                  src="https://stagingcdn.knitapps.com/assets/placeholders/knit-logo/knit-logo-84466848c5c18db89c1b548d54fb59f5edec06b232605f17579c733a40eb196e.png"
                  alt="knit-logo"
                />
              </div>
            </Card.Section>
            <Card.Section>
              <div className="form-container">
                <Form onSubmit={ handleSubmit }>
                  <Stack vertical alignment="center" distribution="center" spacing="extraLoose">
                    <div className="text-field">
                      <Stack vertical spacing="extraLoose">
                        <TextField 
                          label="Email" 
                          value={ email } 
                          onChange={ handleEmailChange }
                          type="email"
                          inputMode="email"
                          clearButton
                          onClearButtonClick={ handleEmailClear }
                        />
                        <TextField 
                          label="Password" 
                          value={ password} 
                          type="password" 
                          onChange={ handlePasswordChange }
                          clearButton
                          onClearButtonClick={ handlePassowrdClear }
                        />
                      </Stack>
                    </div>
                    <Button submit>Login</Button>
                  </Stack>
                </Form>
              </div>
            </Card.Section>
          </Card>
        </div>
        { toastMarkUp }
      </Frame>
    </div>
  )
}

export default LoginPage;