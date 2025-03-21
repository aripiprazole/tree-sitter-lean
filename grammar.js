/**
 * @file Tree sitter parser to the Lean4 theorem prover
 * @author Gabrielle <you@gabx.io>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "lean",

  rules: {
    program: $ => repeat($.any_content),
    
    any_content: $ => choice(
      $.any_character,
      $._whitespace
    ),
    
    any_character: $ => /./,
    _whitespace: $ => /\s+/
  }
});
