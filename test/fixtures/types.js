/*
  Contains map of type names to type JSON.

  Types data taken from raml-parser-toolbelt/tools/datatype-expansion/examples/nodejs/ramls/type_collections.raml
  as of commit eaf25cccd7991fe8d6f700aa615bdfbe91a6ced2
*/

module.exports = {
  'Song': {
    'properties': {
      'title': {
        'type': 'string',
        'example': 'Great'
      },
      'length': 'string'
    }
  },
  'Album': {
    'properties': {
      'title': 'string',
      'songs': {
        'description': 'A list of songs inside an album.',
        'type': 'Song[]'
      }
    },
    'examples': {
      'Album1': {
        'title': 'Test 1',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      },
      'Album2': {
        'title': 'Test 2',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      }
    }
  },
  'Phone': {
    'type': 'object',
    'properties': {
      'manufacturer': {
        'type': 'string'
      },
      'numberOfSIMCards': {
        'type': 'number'
      },
      'kind': 'string'
    }
  },
  'Notebook': {
    'type': 'object',
    'properties': {
      'manufacturer': {
        'type': 'string'
      },
      'numberOfUSBPorts': {
        'type': 'number'
      },
      'kind': 'string'
    }
  },
  'Device': {
    'type': 'Phone | Notebook'
  },
  'Deprecation': {
    'type': 'nil | string'
  },
  'SimpleUnion': {
    'properties': {
      'a': 'string',
      'b': 'number | string'
    }
  },
  'WithInheritance': {
    'type': 'Device',
    'properties': {
      'phone': 'Phone',
      'device': 'Device'
    },
    'example': '{\n  "manufacturer": "John",\n  "numberOfSIMCards": 1234,\n  "kind": "Stamp Collecting",\n  "phone": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  },\n  "device": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  }\n}\n'
  },
  'InlinedDeclaration': {
    'type': {
      'type': 'object',
      'properties': {
        'stringProperty': {
          'type': 'string'
        },
        'numberProperty': {
          'type': 'number'
        }
      }
    }
  },
  'ValidConstraintsInheritance': {
    'minProperties': 2,
    'maxProperties': 9,
    'properties': {
      'name': {
        'type': 'string',
        'required': true,
        'minLength': 4,
        'maxLength': 9,
        'enum': [
          'Jane',
          'John'
        ]
      },
      'age': {
        'type': 'integer',
        'minimum': 19,
        'maximum': 98
      },
      'cats': {
        'type': 'array',
        'items': 'string',
        'minItems': 2,
        'maxItems': 4
      },
      'bio': {
        'type': 'object',
        'minProperties': 2,
        'maxProperties': 9
      }
    },
    'type': {
      'type': 'object',
      'discriminator': 'name',
      'discriminatorValue': 'John',
      'additionalProperties': false,
      'minProperties': 1,
      'maxProperties': 10,
      'properties': {
        'name': {
          'type': 'string',
          'required': false,
          'minLength': 3,
          'maxLength': 10,
          'pattern': 'foobar',
          'enum': [
            'Jane',
            'John',
            'Markus'
          ]
        },
        'age': {
          'type': 'integer',
          'minimum': 18,
          'maximum': 99
        },
        'dob': {
          'type': 'datetime',
          'format': 'rfc2616'
        },
        'cats': {
          'type': 'array',
          'items': 'string',
          'uniqueItems': true,
          'minItems': 1,
          'maxItems': 5
        },
        'bio': {
          'type': 'object',
          'minProperties': 1,
          'maxProperties': 10
        }
      }
    }
  }
}

module.exports.expanded = {
  'Song': {
    'properties': {
      'title': {
        'type': 'string',
        'example': 'Great',
        'required': true
      },
      'length': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Album': {
    'properties': {
      'title': {
        'type': 'string',
        'required': true
      },
      'songs': {
        'description': 'A list of songs inside an album.',
        'type': 'array',
        'items': {
          'properties': {
            'title': {
              'type': 'string',
              'example': 'Great',
              'required': true
            },
            'length': {
              'type': 'string',
              'required': true
            }
          },
          'additionalProperties': true,
          'type': 'object'
        },
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object',
    'examples': {
      'Album1': {
        'title': 'Test 1',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      },
      'Album2': {
        'title': 'Test 2',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      }
    }
  },
  'Phone': {
    'properties': {
      'manufacturer': {
        'type': 'string',
        'required': true
      },
      'numberOfSIMCards': {
        'type': 'number',
        'required': true
      },
      'kind': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Notebook': {
    'properties': {
      'manufacturer': {
        'type': 'string',
        'required': true
      },
      'numberOfUSBPorts': {
        'type': 'number',
        'required': true
      },
      'kind': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Device': {
    'anyOf': [
      {
        'properties': {
          'manufacturer': {
            'type': 'string',
            'required': true
          },
          'numberOfSIMCards': {
            'type': 'number',
            'required': true
          },
          'kind': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      },
      {
        'properties': {
          'manufacturer': {
            'type': 'string',
            'required': true
          },
          'numberOfUSBPorts': {
            'type': 'number',
            'required': true
          },
          'kind': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      }
    ],
    'type': 'union'
  },
  'Deprecation': {
    'anyOf': [
      {
        'type': 'nil'
      },
      {
        'type': 'string'
      }
    ],
    'type': 'union'
  },
  'SimpleUnion': {
    'properties': {
      'a': {
        'type': 'string',
        'required': true
      },
      'b': {
        'anyOf': [
          {
            'type': 'number'
          },
          {
            'type': 'string'
          }
        ],
        'type': 'union',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'WithInheritance': {
    'properties': {
      'phone': {
        'properties': {
          'manufacturer': {
            'type': 'string',
            'required': true
          },
          'numberOfSIMCards': {
            'type': 'number',
            'required': true
          },
          'kind': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object',
        'required': true
      },
      'device': {
        'type': '$recur',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': {
      'anyOf': [
        {
          'properties': {
            'manufacturer': {
              'type': 'string',
              'required': true
            },
            'numberOfSIMCards': {
              'type': 'number',
              'required': true
            },
            'kind': {
              'type': 'string',
              'required': true
            }
          },
          'additionalProperties': true,
          'type': 'object'
        },
        {
          'properties': {
            'manufacturer': {
              'type': 'string',
              'required': true
            },
            'numberOfUSBPorts': {
              'type': 'number',
              'required': true
            },
            'kind': {
              'type': 'string',
              'required': true
            }
          },
          'additionalProperties': true,
          'type': 'object'
        }
      ],
      'type': 'union'
    },
    'example': '{\n  "manufacturer": "John",\n  "numberOfSIMCards": 1234,\n  "kind": "Stamp Collecting",\n  "phone": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  },\n  "device": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  }\n}\n'
  },
  'InlinedDeclaration': {
    'type': {
      'properties': {
        'stringProperty': {
          'type': 'string',
          'required': true
        },
        'numberProperty': {
          'type': 'number',
          'required': true
        }
      },
      'additionalProperties': true,
      'type': 'object'
    }
  },
  'ValidConstraintsInheritance': {
    'properties': {
      'name': {
        'enum': [
          'Jane',
          'John'
        ],
        'type': 'string',
        'minLength': 4,
        'maxLength': 9,
        'required': true
      },
      'age': {
        'maximum': 98,
        'type': 'integer',
        'minimum': 19,
        'required': true
      },
      'cats': {
        'type': 'array',
        'minItems': 2,
        'items': {
          'type': 'string'
        },
        'required': true,
        'maxItems': 4
      },
      'bio': {
        'additionalProperties': true,
        'maxProperties': 9,
        'type': 'object',
        'minProperties': 2,
        'required': true
      }
    },
    'additionalProperties': true,
    'maxProperties': 9,
    'type': {
      'discriminatorValue': 'John',
      'properties': {
        'name': {
          'enum': [
            'Jane',
            'John',
            'Markus'
          ],
          'type': 'string',
          'minLength': 3,
          'maxLength': 10,
          'required': false,
          'pattern': 'foobar'
        },
        'age': {
          'maximum': 99,
          'type': 'integer',
          'minimum': 18,
          'required': true
        },
        'dob': {
          'format': 'rfc2616',
          'type': 'datetime',
          'required': true
        },
        'cats': {
          'uniqueItems': true,
          'type': 'array',
          'minItems': 1,
          'items': {
            'type': 'string'
          },
          'maxItems': 5,
          'required': true
        },
        'bio': {
          'additionalProperties': true,
          'maxProperties': 10,
          'type': 'object',
          'minProperties': 1,
          'required': true
        }
      },
      'additionalProperties': false,
      'maxProperties': 10,
      'type': 'object',
      'minProperties': 1,
      'discriminator': 'name'
    },
    'minProperties': 2
  }
}

module.exports.canonical = {
  'Song': {
    'properties': {
      'title': {
        'type': 'string',
        'example': 'Great',
        'required': true
      },
      'length': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Album': {
    'properties': {
      'title': {
        'type': 'string',
        'required': true
      },
      'songs': {
        'description': 'A list of songs inside an album.',
        'type': 'array',
        'items': {
          'properties': {
            'title': {
              'type': 'string',
              'example': 'Great',
              'required': true
            },
            'length': {
              'type': 'string',
              'required': true
            }
          },
          'additionalProperties': true,
          'type': 'object'
        },
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object',
    'examples': {
      'Album1': {
        'title': 'Test 1',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      },
      'Album2': {
        'title': 'Test 2',
        'songs': [
          {
            'title': 'Great',
            'length': '2'
          },
          {
            'title': 'Awesome',
            'length': '3'
          }
        ]
      }
    }
  },
  'Phone': {
    'properties': {
      'manufacturer': {
        'type': 'string',
        'required': true
      },
      'numberOfSIMCards': {
        'type': 'number',
        'required': true
      },
      'kind': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Notebook': {
    'properties': {
      'manufacturer': {
        'type': 'string',
        'required': true
      },
      'numberOfUSBPorts': {
        'type': 'number',
        'required': true
      },
      'kind': {
        'type': 'string',
        'required': true
      }
    },
    'additionalProperties': true,
    'type': 'object'
  },
  'Device': {
    'anyOf': [
      {
        'properties': {
          'manufacturer': {
            'type': 'string',
            'required': true
          },
          'numberOfSIMCards': {
            'type': 'number',
            'required': true
          },
          'kind': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      },
      {
        'properties': {
          'manufacturer': {
            'type': 'string',
            'required': true
          },
          'numberOfUSBPorts': {
            'type': 'number',
            'required': true
          },
          'kind': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      }
    ],
    'type': 'union'
  },
  'Deprecation': {
    'anyOf': [
      {
        'type': 'nil'
      },
      {
        'type': 'string'
      }
    ],
    'type': 'union'
  },
  'SimpleUnion': {
    'additionalProperties': true,
    'type': 'union',
    'anyOf': [
      {
        'properties': {
          'a': {
            'type': 'string',
            'required': true
          },
          'b': {
            'type': 'number',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      },
      {
        'properties': {
          'a': {
            'type': 'string',
            'required': true
          },
          'b': {
            'type': 'string',
            'required': true
          }
        },
        'additionalProperties': true,
        'type': 'object'
      }
    ]
  },
  // Errors in clj lib
  // "WithInheritance":null,
  'InlinedDeclaration': {
    'additionalProperties': true,
    'type': 'object',
    'properties': {
      'stringProperty': {
        'type': 'string',
        'required': true
      },
      'numberProperty': {
        'type': 'number',
        'required': true
      }
    }
  }
  // Errors in clj lib
  // "ValidConstraintsInheritance":null
}
