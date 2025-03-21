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
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
