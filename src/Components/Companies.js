import React, { useState, useCallback, useContext } from 'react';
import { Button, Avatar, Popover, ActionList, Card, Layout, Stack} from '@shopify/polaris';
import { 
  LogOutMinor, 
  ProfileMajor, 
  PaymentsMajor, 
  QuestionMarkMajor, 
  ConversationMinor 
} from '@shopify/polaris-icons';
import { LoginContext } from '../App';

function Companies() {

  const [userMenuActive, setUserMenuActive] = useState(false);
  const loginContext = useContext(LoginContext);

  console.log(loginContext)

  const userMenuActiveToggle = useCallback(() => setUserMenuActive(active => !active), []);

  const userMenuButton = (
    <Button onClick={ userMenuActiveToggle } plain removeUnderline>
      <div className="user-menu-btn">
        <Avatar name="Tharath" initials="T"/>
        <span style={{ color: 'black' }}>Tharath</span>
      </div>
    </Button>
  );

  return (
    <div>
      <Card>
        <Card.Section>
          <Layout>
            <Layout.Section>
                <Stack>
                  <Stack.Item fill></Stack.Item>
                  <Stack.Item>
                      <Popover
                        activator={ userMenuButton }
                        active={ userMenuActive }
                        onClose={ userMenuActiveToggle }
                      >
                        <ActionList 
                          sections={[
                            {
                              items: [
                                { content: 'My profile', icon: ProfileMajor },
                                { content: 'Billing', icon: PaymentsMajor },
                                { content: 'Help center', icon: QuestionMarkMajor },
                                { content: 'Product feedback', icon: ConversationMinor }
                              ]
                            },
                            {
                              items: [
                                { content: 'Logout', icon: LogOutMinor, onAction: loginContext.handleLogin }
                              ]
                            }
                          ]}
                        />
                      </Popover>
                  </Stack.Item>
                </Stack>
            </Layout.Section>
          </Layout>
        </Card.Section>
      </Card>
    </div>
  )
}

export default Companies
