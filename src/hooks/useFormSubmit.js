/**
 * useFormSubmit.js
 * Custom hook for form submission with loading/success/error states.
 */

import { useState } from 'react';

/**
 * @param {Function} submitFn - Async function that handles the actual submission
 * @returns {{ submit, loading, success, error, reset }}
 */
export function useFormSubmit(submitFn) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState(null);

  /**
   * Executes the submit function with provided data.
   * @param {Object} data - Form data to submit
   */
  const submit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitFn(data);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /** Reset state back to initial */
  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return { submit, loading, success, error, reset };
}
