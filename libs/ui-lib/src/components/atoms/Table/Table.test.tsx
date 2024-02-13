import { render, screen, RenderResult} from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest';
import { Table } from './index';

describe('<Table />', () => {

let TableComponent: RenderResult;

beforeEach(() => {
TableComponent = render(<Table>Test</Table>);
});

test('should render correctly', () => {
expect(screen.getByTestId('CompRoot'));
});
});