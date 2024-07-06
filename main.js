/*
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

    1 <= s.length <= 2 * 10^5
    s consists only of printable ASCII characters.
*/

/*

This solution first normalizes the string by converting it to lowercase and removing all non-alphanumeric characters. 
Then it checks if the normalized string is a palindrome by comparing it to its reverse.

Это решение сначала нормализует строку, преобразуя ее в нижний регистр и удаляя все небуквенно-цифровые символы.
Затем он проверяет, является ли нормализованная строка палиндромом, сравнивая ее с обратной строкой.

*/

/**
 * Функция для проверки, является ли строка палиндромом
 * Function to check if a string is a palindrome
 * @param {string} s - входная строка / input string
 * @returns {boolean} - true, если строка является палиндромом, иначе false / true if the string is a palindrome, otherwise false
 */
 function isPalindrome(s) {
  // Преобразуем строку: приводим к нижнему регистру и удаляем все неалфавитно-цифровые символы
  // Transform the string: convert to lowercase and remove all non-alphanumeric characters
  let normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Проверяем, является ли преобразованная строка палиндромом
  // Check if the transformed string is a palindrome
  return normalized === normalized.split('').reverse().join('');
}
