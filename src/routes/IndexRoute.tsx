import {
  Anchor,
  Badge,
  Button,
  Center,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCloudDownload,
  IconCurrencyDollar,
  IconKey,
  IconLock,
  IconNorthStar,
    IconPlus
} from "@tabler/icons-react";
import { useLiveQuery } from "dexie-react-hooks";
import { Logo } from "../components/Logo";
import { SettingsModal } from "../components/SettingsModal";
import { db } from "../db";
import { config } from "../utils/config";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-location";
import { nanoid } from "nanoid";


export function IndexRoute() {

  const navigate = useNavigate();

  useEffect(() => {
    const createNewChat = async () => {
      const id = nanoid();
      await db.chats.add({
        id,
        description: "New Chat",
        totalTokens: 0,
        createdAt: new Date(),
        pinned: false,
      });
      navigate({ to: `/chats/${id}` });
    };
    }, [navigate]);

  const settings = useLiveQuery(() => db.settings.get("general"));
  const { openAiApiKey } = settings ?? {};

  return (
      <>
        <Center py="xl" sx={{ height: "100%" }}>
          <Container size="sm">
            <Text>
              <Text
                  style={{ cursor: "pointer", fontSize: "4rem", color: "#27B882", textAlign: "left" }}
                  onClick={() => {
                    const id = nanoid();
                    db.chats.add({
                      id,
                      description: "New Chat",
                      totalTokens: 0,
                      createdAt: new Date(),
                      pinned: false,
                    });
                    navigate({ to: `/chats/${id}` });
                  }}
              >
                MasterGPT
              </Text>

            </Text>
            <Text mt={4} size="xl">
              A simple UI for ChatGPT premium APIs
              <Text mt={4} size="xs">
                <Anchor href="https://platform.openai.com/docs/api-reference/introduction" target="_blank">
                  https://platform.openai.com/docs/api-reference/introduction
                </Anchor>
              </Text>
            </Text>
            <Group mt={50}>
                    <Button
                        size="md"
                        variant={openAiApiKey ? "light" : "filled"}
                        leftIcon={<IconPlus size={20} />}
                        onClick={() => {
                          const id = nanoid();
                          db.chats.add({
                            id,
                            description: "New Chat",
                            totalTokens: 0,
                            createdAt: new Date(),
                            pinned: false,
                          });
                          navigate({ to: `/chats/${id}` });
                        }}
                    >
                     Start New Chat
                    </Button>
            </Group>
          </Container>
        </Center>
      </>
  );
}

const features = [

];
