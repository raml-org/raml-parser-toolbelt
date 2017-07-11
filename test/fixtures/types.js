'use strict'

/*
  Contains map of type names to type JSON.

  Types data taken from raml-parser-toolbelt/tools/datatype-expansion/examples/nodejs/ramls/type_collections.raml
  as of commit eaf25cccd7991fe8d6f700aa615bdfbe91a6ced2
*/

module.exports = {
  Song: {
    properties: {
      title: {
        type: 'string',
        example: 'Great'
      },
      length: 'string'
    }
  },
  Album: {
    properties: {
      title: 'string',
      songs: {
        description: 'A list of songs inside an album.',
        type: 'Song[]'
      }
    },
    examples: {
      Album1: {
        title: 'Test 1',
        songs: [
          {
            title: 'Great',
            length: '2'
          },
          {
            title: 'Awesome',
            length: '3'
          }
        ]
      },
      Album2: {
        title: 'Test 2',
        songs: [
          {
            title: 'Great',
            length: '2'
          },
          {
            title: 'Awesome',
            length: '3'
          }
        ]
      }
    }
  },
  Phone: {
    type: 'object',
    properties: {
      manufacturer: {
        type: 'string'
      },
      numberOfSIMCards: {
        type: 'number'
      },
      kind: 'string'
    }
  },
  Notebook: {
    type: 'object',
    properties: {
      manufacturer: {
        type: 'string'
      },
      numberOfUSBPorts: {
        type: 'number'
      },
      kind: 'string'
    }
  },
  Device: {
    type: 'Phone | Notebook'
  },
  Deprecation: {
    type: 'nil | string'
  },
  SimpleUnion: {
    properties: {
      a: 'string',
      b: 'number | string'
    }
  },
  WithInheritance: {
    type: 'Device',
    properties: {
      phone: 'Phone',
      device: 'Device'
    },
    'example': '{\n  "manufacturer": "John",\n  "numberOfSIMCards": 1234,\n  "kind": "Stamp Collecting",\n  "phone": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  },\n  "device": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  }\n}\n'
  },
  InlinedDeclaration: {
    type: {
      type: 'object',
      properties: {
        stringProperty: {
          type: 'string'
        },
        numberProperty: {
          type: 'number'
        }
      }
    }
  },
  ValidConstraintsInheritance: {
    minProperties: 2,
    maxProperties: 9,
    properties: {
      name: {
        type: 'string',
        required: true,
        minLength: 4,
        maxLength: 9,
        enum: [
          'Jane',
          'John'
        ]
      },
      age: {
        type: 'integer',
        minimum: 19,
        maximum: 98
      },
      cats: {
        type: 'array',
        items: 'string',
        minItems: 2,
        maxItems: 4
      },
      bio: {
        type: 'object',
        minProperties: 2,
        maxProperties: 9
      }
    },
    type: {
      type: 'object',
      discriminator: 'name',
      discriminatorValue: 'John',
      additionalProperties: false,
      minProperties: 1,
      maxProperties: 10,
      properties: {
        name: {
          type: 'string',
          required: false,
          minLength: 3,
          maxLength: 10,
          pattern: 'foobar',
          enum: [
            'Jane',
            'John',
            'Markus'
          ]
        },
        age: {
          type: 'integer',
          minimum: 18,
          maximum: 99
        },
        dob: {
          type: 'datetime',
          format: 'rfc2616'
        },
        cats: {
          type: 'array',
          items: 'string',
          uniqueItems: true,
          minItems: 1,
          maxItems: 5
        },
        bio: {
          type: 'object',
          minProperties: 1,
          maxProperties: 10
        }
      }
    }
  }
}
