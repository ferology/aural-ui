import type { Meta, StoryObj } from '@storybook/html';
import { createThemeGrid } from '../.storybook/utils/createThemeGrid';

const meta: Meta = {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Table Component

Organized data display in rows and columns with support for sorting, striping, and expandable rows.
See the **Documentation** tab for framework-specific code examples (React, Vue, Svelte).

## Features

- Basic table structure with semantic HTML
- Striped rows for better readability (\`table-striped\`)
- Hoverable rows to indicate interactivity (\`table-hover\`)
- Compact variant for dense data (\`table-compact\`)
- Expandable rows for additional details
- Row selection with checkboxes
- Sortable headers
- Responsive wrapper for horizontal scrolling
- Loading states with skeleton
- Proper ARIA attributes for accessibility

## CSS Classes

- \`.table\` - Base table class (required)
- \`.table-wrapper\` - Enables horizontal scrolling on smaller screens
- \`.table-striped\` - Alternating row background colors
- \`.table-hover\` - Hover effect on rows
- \`.table-compact\` - Reduced padding for dense layouts
- \`.expandable\` - Applied to rows that can be expanded
- \`.expanded\` - Applied when row is expanded
- \`.expand-cell\` - Column containing expand icons
- \`.table-expand-icon\` - Chevron icon for expandable rows
- \`.expanded-content\` - Container for expanded row content
- \`.table-expanded-content\` - Styled wrapper for expanded details
- \`.hidden\` - Hides expanded content when collapsed

## Framework Examples

**Vanilla HTML:**
\`\`\`html
<div class="table-wrapper">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>
\`\`\`

**React:**
\`\`\`jsx
const Table = ({ data, columns }) => (
  <div className="table-wrapper">
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map(col => <th key={col.key} scope="col">{col.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
\`\`\`

**Vue:**
\`\`\`vue
<template>
  <div class="table-wrapper">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" scope="col">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in data" :key="idx">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
\`\`\`

**Svelte:**
\`\`\`svelte
<div class="table-wrapper">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        {#each columns as col}
          <th scope="col">{col.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each columns as col}
            <td>{row[col.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
\`\`\`
        `.trim()
      }
    }
  },
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Enable striped rows for better readability'
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect on rows'
    },
    compact: {
      control: 'boolean',
      description: 'Use compact spacing for dense data'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table';

    // Create thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Email', 'Status'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create tbody
    const tbody = document.createElement('tbody');
    const data = [
      { name: 'John Doe', email: 'john@example.com', status: 'Active', statusVariant: 'success' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', statusVariant: 'success' },
      { name: 'Bob Wilson', email: 'bob@example.com', status: 'Pending', statusVariant: 'warning' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `badge badge-${item.statusVariant}`;
      badge.textContent = item.status;
      statusTd.appendChild(badge);
      row.appendChild(statusTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const Striped: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-striped';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Product', 'Price', 'Stock'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { product: 'Widget A', price: '$19.99', stock: '45' },
      { product: 'Widget B', price: '$29.99', stock: '12' },
      { product: 'Widget C', price: '$39.99', stock: '8' },
      { product: 'Widget D', price: '$49.99', stock: '23' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const StripedAndHover: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-striped table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Product', 'Price', 'Stock'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { product: 'Widget A', price: '$19.99', stock: '45' },
      { product: 'Widget B', price: '$29.99', stock: '12' },
      { product: 'Widget C', price: '$39.99', stock: '8' },
      { product: 'Widget D', price: '$49.99', stock: '23' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const Compact: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-compact';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Email', 'Role'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
      { name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const WithSelection: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Checkbox header
    const checkboxTh = document.createElement('th');
    checkboxTh.setAttribute('scope', 'col');
    checkboxTh.style.width = '40px';
    const headerCheckbox = document.createElement('input');
    headerCheckbox.type = 'checkbox';
    headerCheckbox.className = 'checkbox';
    headerCheckbox.setAttribute('aria-label', 'Select all rows');
    headerCheckbox.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const checkboxes = wrapper.querySelectorAll('tbody input[type="checkbox"]');
      checkboxes.forEach((cb) => {
        (cb as HTMLInputElement).checked = target.checked;
      });
    });
    checkboxTh.appendChild(headerCheckbox);
    headerRow.appendChild(checkboxTh);

    ['Name', 'Email', 'Status'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { name: 'John Doe', email: 'john@example.com', status: 'Active', statusVariant: 'success' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', statusVariant: 'success' },
      { name: 'Bob Wilson', email: 'bob@example.com', status: 'Pending', statusVariant: 'warning' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      // Checkbox cell
      const checkboxTd = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.setAttribute('aria-label', `Select ${item.name}`);
      checkboxTd.appendChild(checkbox);
      row.appendChild(checkboxTd);

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `badge badge-${item.statusVariant}`;
      badge.textContent = item.status;
      statusTd.appendChild(badge);
      row.appendChild(statusTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const WithSorting: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = [
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'actions', label: 'Actions', sortable: false }
    ];

    headers.forEach(header => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');

      if (header.sortable) {
        th.style.cursor = 'pointer';
        th.style.userSelect = 'none';
        th.setAttribute('role', 'button');
        th.setAttribute('aria-sort', 'none');
        th.setAttribute('tabindex', '0');

        const span = document.createElement('span');
        span.textContent = header.label;
        th.appendChild(span);

        const icon = document.createElement('span');
        icon.textContent = ' ↕';
        icon.style.opacity = '0.3';
        icon.style.fontSize = '0.8em';
        icon.setAttribute('aria-hidden', 'true');
        th.appendChild(icon);

        th.addEventListener('click', () => {
          icon.textContent = icon.textContent === ' ↑' ? ' ↓' : ' ↑';
          icon.style.opacity = '1';
          th.setAttribute('aria-sort', icon.textContent === ' ↑' ? 'ascending' : 'descending');
        });
      } else {
        th.textContent = header.label;
      }

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
      { name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const roleTd = document.createElement('td');
      roleTd.textContent = item.role;
      row.appendChild(roleTd);

      const actionsTd = document.createElement('td');
      const actionsDiv = document.createElement('div');
      actionsDiv.style.display = 'flex';
      actionsDiv.style.gap = 'var(--space-2)';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-ghost btn-sm';
      editBtn.textContent = 'Edit';
      editBtn.setAttribute('aria-label', `Edit ${item.name}`);
      actionsDiv.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-ghost btn-sm';
      deleteBtn.textContent = 'Delete';
      deleteBtn.setAttribute('aria-label', `Delete ${item.name}`);
      actionsDiv.appendChild(deleteBtn);

      actionsTd.appendChild(actionsDiv);
      row.appendChild(actionsTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const WithPagination: Story = {
  render: () => {
    const container = document.createElement('div');

    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-striped table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Name', 'Email', 'Status'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { id: '001', name: 'John Doe', email: 'john@example.com', status: 'Active', statusVariant: 'success' },
      { id: '002', name: 'Jane Smith', email: 'jane@example.com', status: 'Active', statusVariant: 'success' },
      { id: '003', name: 'Bob Wilson', email: 'bob@example.com', status: 'Pending', statusVariant: 'warning' },
      { id: '004', name: 'Alice Brown', email: 'alice@example.com', status: 'Active', statusVariant: 'success' },
      { id: '005', name: 'Charlie Davis', email: 'charlie@example.com', status: 'Inactive', statusVariant: 'danger' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      const idTd = document.createElement('td');
      idTd.textContent = item.id;
      row.appendChild(idTd);

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `badge badge-${item.statusVariant}`;
      badge.textContent = item.status;
      statusTd.appendChild(badge);
      row.appendChild(statusTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);
    container.appendChild(wrapper);

    // Pagination
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    paginationDiv.style.marginTop = 'var(--space-4)';
    paginationDiv.setAttribute('role', 'navigation');
    paginationDiv.setAttribute('aria-label', 'Pagination');

    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-outline btn-sm';
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = true;
    prevBtn.setAttribute('aria-label', 'Go to previous page');
    paginationDiv.appendChild(prevBtn);

    const pageInfo = document.createElement('span');
    pageInfo.style.margin = '0 var(--space-4)';
    pageInfo.textContent = 'Page 1 of 3';
    pageInfo.setAttribute('aria-live', 'polite');
    pageInfo.setAttribute('aria-atomic', 'true');
    paginationDiv.appendChild(pageInfo);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-outline btn-sm';
    nextBtn.textContent = 'Next';
    nextBtn.setAttribute('aria-label', 'Go to next page');
    paginationDiv.appendChild(nextBtn);

    container.appendChild(paginationDiv);

    return container;
  }
};

export const ResponsiveScrollable: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    wrapper.style.maxWidth = '600px';

    const table = document.createElement('table');
    table.className = 'table table-striped';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Product Name', 'Category', 'Price', 'Stock', 'Supplier', 'Last Updated'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { id: '001', product: 'Widget A', category: 'Electronics', price: '$19.99', stock: '45', supplier: 'Acme Corp', updated: '2024-01-15' },
      { id: '002', product: 'Gadget B', category: 'Hardware', price: '$29.99', stock: '12', supplier: 'Tech Supply', updated: '2024-01-18' },
      { id: '003', product: 'Device C', category: 'Electronics', price: '$39.99', stock: '8', supplier: 'Acme Corp', updated: '2024-01-20' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    const hint = document.createElement('p');
    hint.style.marginTop = 'var(--space-2)';
    hint.style.fontSize = 'var(--text-sm)';
    hint.style.color = 'var(--color-text-secondary)';
    hint.textContent = 'Scroll horizontally to view all columns';

    const container = document.createElement('div');
    container.appendChild(wrapper);
    container.appendChild(hint);

    return container;
  }
};

export const LoadingSkeleton: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Email', 'Status'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.setAttribute('aria-busy', 'true');
    tbody.setAttribute('aria-label', 'Loading table data');

    // Create 3 skeleton rows
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton';
        skeleton.style.height = '20px';
        skeleton.style.width = j === 2 ? '60px' : '100%';
        skeleton.setAttribute('aria-hidden', 'true');
        td.appendChild(skeleton);
        row.appendChild(td);
      }

      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const ExpandableRows: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const expandTh = document.createElement('th');
    expandTh.className = 'expand-cell';
    expandTh.setAttribute('scope', 'col');
    headerRow.appendChild(expandTh);

    ['Name', 'Email', 'Status'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    const data = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        status: 'Active',
        statusVariant: 'success',
        details: {
          department: 'Engineering',
          role: 'Senior Developer',
          location: 'San Francisco, CA',
          joined: 'January 15, 2023'
        }
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        status: 'Active',
        statusVariant: 'success',
        details: {
          department: 'Design',
          role: 'Lead Designer',
          location: 'New York, NY',
          joined: 'March 8, 2022'
        }
      },
      {
        name: 'Bob Wilson',
        email: 'bob@example.com',
        status: 'Pending',
        statusVariant: 'warning',
        details: {
          department: 'Sales',
          role: 'Account Manager',
          location: 'Chicago, IL',
          joined: 'June 22, 2024'
        }
      }
    ];

    data.forEach(item => {
      // Main row
      const row = document.createElement('tr');
      row.className = 'expandable';
      row.setAttribute('role', 'button');
      row.setAttribute('aria-expanded', 'false');
      row.setAttribute('tabindex', '0');

      const expandTd = document.createElement('td');
      expandTd.className = 'expand-cell';
      const expandIcon = document.createElement('span');
      expandIcon.className = 'table-expand-icon';
      expandIcon.innerHTML = '&rsaquo;'; // Right-pointing chevron (›)
      expandIcon.setAttribute('aria-hidden', 'true');
      expandTd.appendChild(expandIcon);
      row.appendChild(expandTd);

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `badge badge-${item.statusVariant}`;
      badge.textContent = item.status;
      statusTd.appendChild(badge);
      row.appendChild(statusTd);

      tbody.appendChild(row);

      // Expanded content row
      const expandedRow = document.createElement('tr');
      expandedRow.className = 'expanded-content hidden';
      expandedRow.setAttribute('role', 'region');
      expandedRow.setAttribute('aria-label', `Additional details for ${item.name}`);

      const expandedTd = document.createElement('td');
      expandedTd.colSpan = 4;

      const expandedContent = document.createElement('div');
      expandedContent.className = 'table-expanded-content';

      const heading = document.createElement('h4');
      heading.textContent = 'Additional Details';
      heading.style.marginTop = '0';
      expandedContent.appendChild(heading);

      Object.entries(item.details).forEach(([key, value]) => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}`;
        p.style.margin = 'var(--space-2) 0';
        expandedContent.appendChild(p);
      });

      expandedTd.appendChild(expandedContent);
      expandedRow.appendChild(expandedTd);
      tbody.appendChild(expandedRow);

      // Toggle functionality
      const toggleRow = () => {
        row.classList.toggle('expanded');
        expandedRow.classList.toggle('hidden');
        const isExpanded = !expandedRow.classList.contains('hidden');
        row.setAttribute('aria-expanded', isExpanded.toString());
        expandIcon.innerHTML = isExpanded ? '&darr;' : '&rsaquo;'; // Down arrow (↓) when expanded, chevron (›) when collapsed
      };

      row.addEventListener('click', toggleRow);
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleRow();
        }
      });
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const WithActions: Story = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'table table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Name', 'Email', 'Status', 'Actions'].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const data = [
      { name: 'John Doe', email: 'john@example.com', status: 'Active', statusVariant: 'success' },
      { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', statusVariant: 'success' }
    ];

    data.forEach(item => {
      const row = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = item.name;
      row.appendChild(nameTd);

      const emailTd = document.createElement('td');
      emailTd.textContent = item.email;
      row.appendChild(emailTd);

      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `badge badge-${item.statusVariant}`;
      badge.textContent = item.status;
      statusTd.appendChild(badge);
      row.appendChild(statusTd);

      const actionsTd = document.createElement('td');
      const actionsDiv = document.createElement('div');
      actionsDiv.style.display = 'flex';
      actionsDiv.style.gap = 'var(--space-2)';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-ghost btn-sm';
      editBtn.textContent = 'Edit';
      editBtn.setAttribute('aria-label', `Edit ${item.name}`);
      actionsDiv.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-ghost btn-sm';
      deleteBtn.textContent = 'Delete';
      deleteBtn.setAttribute('aria-label', `Delete ${item.name}`);
      actionsDiv.appendChild(deleteBtn);

      actionsTd.appendChild(actionsDiv);
      row.appendChild(actionsTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
};

export const ThemeComparison: Story = {
  render: (args) => {
    return createThemeGrid(() => {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';

      const table = document.createElement('table');
      const classes = ['table'];
      if (args.striped) classes.push('table-striped');
      if (args.hover) classes.push('table-hover');
      if (args.compact) classes.push('table-compact');
      table.className = classes.join(' ');

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      ['Name', 'Email', 'Status'].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.setAttribute('scope', 'col');
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      const data = [
        { name: 'John Doe', email: 'john@example.com', status: 'Active', statusVariant: 'success' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'Active', statusVariant: 'success' },
        { name: 'Bob Wilson', email: 'bob@example.com', status: 'Pending', statusVariant: 'warning' }
      ];

      data.forEach(item => {
        const row = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = item.name;
        row.appendChild(nameTd);

        const emailTd = document.createElement('td');
        emailTd.textContent = item.email;
        row.appendChild(emailTd);

        const statusTd = document.createElement('td');
        const badge = document.createElement('span');
        badge.className = `badge badge-${item.statusVariant}`;
        badge.textContent = item.status;
        statusTd.appendChild(badge);
        row.appendChild(statusTd);

        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      wrapper.appendChild(table);

      return wrapper;
    });
  },
  args: {
    striped: true,
    hover: true,
    compact: false
  }
};
