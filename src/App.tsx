/** @jsxImportSource @emotion/react */

import React from 'react';
import cards from './data';
import { motion } from 'framer-motion';
import { css, Global } from '@emotion/react';
import {
  PlusIcon,
  CheckIcon,
  PauseIcon,
  FilterIcon,
  MasterCardIcon,
} from './Icons';

function App() {
  const globalStyles = css`
    :root {
      --base-size: 0.4rem;
      --base-space: 0.8rem;
      --base-radius: 0.4rem;
      --base-font-size: 1rem;
      --base-font-percentage: 62.5%;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    @font-face {
      font-family: Inter;
      font-weight: 400;
      src: url('../assets/fonts/Inter-Regular.woff2') format('woff2');
    }

    @font-face {
      font-family: Inter;
      font-weight: 500;
      src: url('../assets/fonts/Inter-Medium.woff2') format('woff2');
    }

    @font-face {
      font-family: Inter;
      font-weight: 600;
      src: url('../assets/fonts/Inter-Semibold.woff2') format('woff2');
    }

    @font-face {
      font-family: Inter;
      font-weight: 700;
      src: url('../assets/fonts/Inter-Bold.woff2') format('woff2');
    }

    html {
      font-family: Inter, sans-serif;
      font-size: var(--base-font-percentage);
    }
  `;

  const [activeCard, setActiveCard] = React.useState<number>(0);

  return (
    <React.Fragment>
      <Global styles={globalStyles} />

      <main
        css={{
          display: 'flex',
          minWidth: 'lvw',
          minHeight: '100lvh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e8e8e9',
          padding: 'calc(var(--base-size) * 2)',
        }}
      >
        <div
          css={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 'calc(var(--base-size) * 2)',
            maxWidth: 'calc(var(--base-size) * 120)',
            borderRadius: 'calc(var(--base-radius) * 3)',
          }}
        >
          {/* cards header */}
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'calc(var(--base-space) * 1.5)',
              marginBottom: 'calc(var(--base-space) * 1)',
            }}
          >
            <h4
              css={{
                fontWeight: '600',
                fontSize: 'calc(var(--base-font-size) * 2)',
              }}
            >
              Cards list
            </h4>
            <div
              css={{
                display: 'flex',
                gap: 'calc(var(--base-space) * 3)',
                svg: {
                  color: '#111',
                  width: 'calc(var(--base-size) * 5)',
                  height: 'calc(var(--base-size) * 5)',
                },
              }}
            >
              <FilterIcon />
              <PlusIcon />
            </div>
          </div>
          {/* cards */}
          <div
            css={{
              '> *:not(:last-child)': {
                borderBottom: '1px solid #edecec',
                marginBottom: 'calc(var(--base-space) * 2)',
              },
            }}
          >
            {cards.map((card, index) => {
              const StatusIcon = () => {
                switch (card.status) {
                  case 'active':
                    return <CheckIcon />;
                  case 'suspended':
                    return <PauseIcon />;
                  default:
                    return null;
                }
              };

              const isActiveCard = activeCard === index + 1;

              return (
                <motion.div
                  key={index}
                  initial={{ backgroundColor: 'inherit' }}
                  animate={{
                    backgroundColor: isActiveCard ? card.color : 'inherit',
                    borderRadius: isActiveCard ? '20px' : '0px',
                  }}
                  transition={{
                    borderRadius: { duration: 0.2, ease: 'easeInOut' },
                    backgroundColor: { duration: 0.2, ease: 'easeInOut' },
                  }}
                  css={{
                    display: 'flex',
                    overflow: 'hidden',
                    alignItems: 'center',
                    paddingTop: 'calc(var(--base-space) * 1.5)',
                    borderRadius: 'calc(var(--base-radius) * 3)',
                    paddingLeft: 'calc(var(--base-space) * 2.25)',
                  }}
                  onTouchEnd={() => setActiveCard(0)}
                  onMouseOut={() => setActiveCard(0)}
                  onMouseLeave={() => setActiveCard(0)}
                  onTouchMove={() => setActiveCard(index + 1)}
                  onMouseOver={() => setActiveCard(index + 1)}
                  onTouchStart={() => setActiveCard(index + 1)}
                >
                  <div
                    css={{
                      flexBasis: '100%',
                      '> *:not(:last-child)': {
                        marginBottom: 'calc(var(--base-space) * 1)',
                      },
                    }}
                  >
                    <h6
                      css={{
                        fontWeight: 600,
                        fontSize: 'calc(var(--base-font-size) * 1.7)',
                      }}
                    >
                      {card.name}
                    </h6>
                    <div
                      css={{
                        display: 'flex',
                        gap: 'calc(var(--base-space) * 1)',
                      }}
                    >
                      <span
                        css={{
                          fontWeight: 500,
                          textTransform: 'capitalize',
                          fontSize: 'calc(var(--base-font-size) * 1.3)',
                          color:
                            card.status === 'suspended' ? '#e38e17' : '#1a1a1a',
                          svg: {
                            verticalAlign: 'middle',
                            width: 'calc(var(--base-size) * 3.75)',
                            height: 'calc(var(--base-size) * 3.75)',
                            marginRight: 'calc(var(--base-space) * 0.3)',
                          },
                        }}
                      >
                        {StatusIcon()}
                        {card.status}
                      </span>
                      <span
                        css={{
                          fontWeight: 500,
                          color: '#7a7a7b',
                          fontSize: 'calc(var(--base-font-size) * 1.3)',
                        }}
                      >
                        Issued access: {card.issues}
                      </span>
                    </div>
                    <div
                      css={{
                        display: 'flex',
                        gap: 'calc(var(--base-space) * 0.4)',
                      }}
                    >
                      {/* users */}
                      {card.users
                        .filter((_, i) => i < 5)
                        .map((user) => {
                          return (
                            <motion.img
                              alt={user.image.alt}
                              src={`/assets/images/${user.image.src}`}
                              initial={{
                                backgroundColor: '#f1f1f1',
                              }}
                              animate={{
                                backgroundColor: isActiveCard
                                  ? card.cardColor
                                  : '#f1f1f1',
                              }}
                              transition={{ ease: 'easeInOut', duration: 0.2 }}
                              css={{
                                objectFit: 'cover',
                                borderRadius: '50%',
                                width: 'calc(var(--base-size) * 6.5)',
                                height: 'calc(var(--base-size) * 6.5)',
                                padding: 'calc(var(--base-space) * 0.15)',
                              }}
                            />
                          );
                        })}
                      {card.users.length > 5 ? (
                        <span
                          css={{
                            color: 'white',
                            display: 'flex',
                            fontWeight: 600,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1a1a1a',
                            width: 'calc(var(--base-size) * 6.5)',
                            height: 'calc(var(--base-size) * 6.5)',
                            fontsize: 'calc(var(--base-font-size) * 1.6)',
                            borderRadius: 'calc(var(--base-radius) * 999)',
                          }}
                        >
                          +{card.users.length - 5}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {/* div */}
                  <motion.div
                    initial={{
                      x: 32,
                      y: 12,
                      color: '#1a1a1a',
                      backgroundColor: '#d2d2de',
                    }}
                    animate={{
                      x: isActiveCard ? 28 : 32,
                      y: isActiveCard ? 24 : 12,
                      rotate: isActiveCard ? '-12deg' : '0deg',
                      color: isActiveCard ? card.color : '#1a1a1a',
                      backgroundColor: isActiveCard
                        ? card.cardColor
                        : '#d2d2de',
                    }}
                    transition={{
                      damping: 16,
                      type: 'spring',
                      stiffness: 250,
                      duration: 0.25,
                      ease: 'easeInOut',
                      color: { ease: 'easeInOut', duration: 0.2 },
                      backgroundColor: { ease: 'easeInOut', duration: 0.2 },
                    }}
                    style={{
                      transformOrigin: 'bottom left',
                    }}
                    css={{
                      width: 'calc(var(--base-size) * 42)',
                      height: 'calc(var(--base-size) * 24)',
                      padding: 'calc(var(--base-space) * 1)',
                      borderTopLeftRadius: 'calc(var(--base-radius) * 4)',
                      svg: {
                        width: 'calc(var(--base-size) * 6.5)',
                        height: 'calc(var(--base-size) * 6.5)',
                      },
                    }}
                  >
                    <MasterCardIcon />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
