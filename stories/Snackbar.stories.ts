import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Snackbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Snackbar Component

Brief messages with optional actions, appearing at the edge of the screen. Snackbars provide feedback about an operation and can include action buttons.

See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Key Differences: Snackbar vs Toast

- **Snackbars** can include action buttons (Undo, Retry, View, etc.)
- **Snackbars** typically appear at the bottom of the screen
- **Toasts** are purely informational without actions
- **Toasts** typically appear at the top corners

Use snackbars when undo/retry actions are helpful for the user.

## Framework Examples

**Vanilla JS:**
\`\`\`javascript
// Basic snackbar
Aural.showSnackbar('Item deleted');

// With action button
Aural.showSnackbar('Item deleted', {
  action: { label: 'Undo', onClick: () => console.log('Undo clicked') }
});
\`\`\`

**React:**
\`\`\`jsx
const handleDelete = () => {
  window.Aural.showSnackbar('Item deleted', {
    type: 'error',
    action: { label: 'Undo', onClick: handleUndo }
  });
};
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The message to display in the snackbar'
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Snackbar type determines the icon and color scheme'
    },
    position: {
      control: 'select',
      options: ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'],
      description: 'Position of the snackbar on screen'
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 1000 },
      description: 'Auto-dismiss duration in milliseconds (0 = persistent)'
    },
    description: {
      control: 'text',
      description: 'Optional additional details displayed below the message'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.textContent = 'Show Snackbar';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar(args.message, {
          type: args.type,
          duration: args.duration,
          position: args.position
        });
      }
    };

    container.appendChild(button);
    return container;
  },
  args: {
    message: 'This is a basic snackbar message',
    type: 'default',
    duration: 4000,
    position: 'bottom-center'
  }
};

export const AllTypes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const types = [
      { type: 'default', message: 'Default message', className: 'btn-secondary' },
      { type: 'success', message: 'Success message', className: 'btn-success' },
      { type: 'info', message: 'Info message', className: 'btn-info' },
      { type: 'warning', message: 'Warning message', className: 'btn-warning' },
      { type: 'error', message: 'Error message', className: 'btn-error' }
    ];

    types.forEach(({ type, message, className }) => {
      const button = document.createElement('button');
      button.className = `btn ${className}`;
      button.textContent = type.charAt(0).toUpperCase() + type.slice(1);

      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar(message, { type: type as any });
        }
      };

      container.appendChild(button);
    });

    return container;
  }
};

export const AllPositions: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '1rem';

    const positions = [
      { position: 'top-left', label: 'Top Left' },
      { position: 'top-center', label: 'Top Center' },
      { position: 'top-right', label: 'Top Right' },
      { position: 'bottom-left', label: 'Bottom Left' },
      { position: 'bottom-center', label: 'Bottom Center' },
      { position: 'bottom-right', label: 'Bottom Right' }
    ];

    positions.forEach(({ position, label }) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.textContent = label;

      button.onclick = () => {
        if (typeof window.Aural !== 'undefined') {
          window.Aural.showSnackbar(`Snackbar at ${label}`, {
            position: position as any,
            type: 'info'
          });
        }
      };

      container.appendChild(button);
    });

    return container;
  }
};

export const WithAction: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-error';
    button1.textContent = 'Delete with Undo';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Item deleted', {
          type: 'error',
          action: {
            label: 'Undo',
            onClick: () => {
              window.Aural.showSnackbar('Item restored', { type: 'success' });
            }
          },
          duration: 6000
        });
      }
    };

    const button2 = document.createElement('button');
    button2.className = 'btn btn-warning';
    button2.textContent = 'Error with Retry';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Connection failed', {
          type: 'error',
          action: {
            label: 'Retry',
            onClick: () => {
              window.Aural.showSnackbar('Retrying...', { type: 'info' });
            }
          },
          duration: 6000
        });
      }
    };

    const button3 = document.createElement('button');
    button3.className = 'btn btn-success';
    button3.textContent = 'Message with View';
    button3.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('New message received', {
          description: 'From John Doe',
          type: 'info',
          action: {
            label: 'View',
            onClick: () => {
              alert('Viewing message...');
            }
          },
          duration: 6000
        });
      }
    };

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
};

export const WithDescription: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-success';
    button1.textContent = 'Upload Success';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('File uploaded', {
          description: 'document.pdf has been uploaded successfully',
          type: 'success',
          action: {
            label: 'View',
            onClick: () => alert('View file')
          }
        });
      }
    };

    const button2 = document.createElement('button');
    button2.className = 'btn btn-info';
    button2.textContent = 'New Notification';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('New message received', {
          description: 'From John Doe: "Meeting at 3 PM"',
          type: 'info',
          action: {
            label: 'Reply',
            onClick: () => alert('Reply to message')
          }
        });
      }
    };

    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  }
};

export const DurationVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexWrap = 'wrap';

    const button1 = document.createElement('button');
    button1.className = 'btn btn-secondary';
    button1.textContent = 'Quick (2s)';
    button1.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Quick message', {
          duration: 2000,
          type: 'info'
        });
      }
    };

    const button2 = document.createElement('button');
    button2.className = 'btn btn-secondary';
    button2.textContent = 'Standard (5s)';
    button2.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Standard duration message', {
          duration: 5000,
          type: 'info'
        });
      }
    };

    const button3 = document.createElement('button');
    button3.className = 'btn btn-secondary';
    button3.textContent = 'Extended (10s)';
    button3.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('Extended duration message', {
          duration: 10000,
          type: 'info'
        });
      }
    };

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    return container;
  }
};

export const Persistent: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Persistent Snackbar';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('This snackbar will not auto-dismiss', {
          description: 'Click the X button to close it manually',
          type: 'info',
          duration: 0,
          action: {
            label: 'Got it',
            onClick: () => {}
          }
        });
      }
    };

    container.appendChild(button);
    return container;
  }
};

export const StackingSnackbars: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Show Multiple Snackbars';

    button.onclick = () => {
      if (typeof window.Aural !== 'undefined') {
        window.Aural.showSnackbar('First snackbar', {
          type: 'success',
          duration: 5000
        });

        setTimeout(() => {
          window.Aural.showSnackbar('Second snackbar', {
            type: 'info',
            duration: 5000
          });
        }, 500);

        setTimeout(() => {
          window.Aural.showSnackbar('Third snackbar', {
            type: 'warning',
            duration: 5000
          });
        }, 1000);
      }
    };

    container.appendChild(button);
    return container;
  }
};

export const CommonPatterns: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    container.style.gap = '1rem';

    const patterns = [
      {
        label: 'Delete Pattern',
        className: 'btn-error',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Item deleted', {
              type: 'error',
              action: {
                label: 'UNDO',
                onClick: () => {
                  window.Aural.showSnackbar('Item restored', { type: 'success' });
                }
              },
              duration: 6000
            });
          }
        }
      },
      {
        label: 'Save Pattern',
        className: 'btn-success',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Changes saved', {
              type: 'success',
              duration: 3000
            });
          }
        }
      },
      {
        label: 'Network Error',
        className: 'btn-warning',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Connection lost', {
              description: 'Check your internet connection',
              type: 'error',
              action: {
                label: 'Retry',
                onClick: () => {
                  window.Aural.showSnackbar('Reconnecting...', { type: 'info' });
                }
              },
              duration: 0
            });
          }
        }
      },
      {
        label: 'Copy to Clipboard',
        className: 'btn-secondary',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Link copied to clipboard', {
              type: 'success',
              duration: 2000
            });
          }
        }
      },
      {
        label: 'Item Added',
        className: 'btn-primary',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Item added to cart', {
              type: 'success',
              action: {
                label: 'View Cart',
                onClick: () => alert('View cart')
              },
              duration: 5000
            });
          }
        }
      },
      {
        label: 'Form Validation',
        className: 'btn-warning',
        onClick: () => {
          if (typeof window.Aural !== 'undefined') {
            window.Aural.showSnackbar('Please fill in all required fields', {
              type: 'warning',
              duration: 4000
            });
          }
        }
      }
    ];

    patterns.forEach(({ label, className, onClick }) => {
      const button = document.createElement('button');
      button.className = `btn ${className}`;
      button.textContent = label;
      button.onclick = onClick;
      container.appendChild(button);
    });

    return container;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.textContent = 'Show Snackbar';

      // Create container to hold both button and snackbar preview
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.minHeight = '120px';
      wrapper.appendChild(button);

      // Create static snackbar preview
      const snackbar = document.createElement('div');
      snackbar.className = 'aural-snackbar';
      if (args.type !== 'default') {
        snackbar.classList.add(`aural-snackbar--${args.type}`);
      }
      snackbar.style.position = 'relative';
      snackbar.style.marginTop = '1rem';
      snackbar.setAttribute('role', args.type === 'error' ? 'alert' : 'status');

      let html = '';

      // Add icon based on type
      if (args.type !== 'default') {
        html += '<div class="aural-snackbar__icon">';
        if (args.type === 'success') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        } else if (args.type === 'error') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
        } else if (args.type === 'warning') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
        } else if (args.type === 'info') {
          html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
        }
        html += '</div>';
      }

      html += '<div class="aural-snackbar__content">';
      html += `<div class="aural-snackbar__message">${args.message}</div>`;
      if (args.description) {
        html += `<div class="aural-snackbar__description">${args.description}</div>`;
      }
      html += '</div>';

      if (args.showAction) {
        html += '<div class="aural-snackbar__actions">';
        html += '<button class="aural-snackbar__action">Undo</button>';
        html += '<button class="aural-snackbar__close" aria-label="Close snackbar">';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        html += '</button>';
        html += '</div>';
      }

      snackbar.innerHTML = html;
      wrapper.appendChild(snackbar);

      return wrapper;
    });
  },
  args: {
    message: 'Item deleted',
    description: '',
    type: 'error',
    showAction: true
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Snackbar message'
    },
    description: {
      control: 'text',
      description: 'Optional description text'
    },
    type: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Snackbar type'
    },
    showAction: {
      control: 'boolean',
      description: 'Show action button'
    }
  }
};
